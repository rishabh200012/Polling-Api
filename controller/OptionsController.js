import Option from '../models/options.js';
import Question from '../models/questions.js';

export default class optionController{
    async create (req, res)  {
        console.log(req.body, req.params.id);
    
        try {
            const opt = await Option.create({
                option: req.body.content,
                question: req.params.id,
            });
    
            const updateOpt = await Option.findByIdAndUpdate(opt._id, { "add_vote": `http://localhost:3000/api/v1/options/${opt._id}/add_vote` });
            await updateOpt.save();
    
            const ques = await Question.findById(req.params.id);
            if (ques) {
                ques.options.push(updateOpt);
                await ques.save();
                console.log(ques);
                res.send(ques);
            } else {
                res.send('Question does not exist');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    };
    
    async add_vote  (req, res)  {
        console.log(req.params.id);
    
        try {
            const opt = await Option.findByIdAndUpdate(req.params.id, { $inc: { vote: 1 } });
            if (opt) {
                await opt.save();
                console.log(opt);
                res.send(opt);
            } else {
                res.send('Option does not exist');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    };
    
    async deleteOption  (req, res) {
        console.log('id', req.params.id);
    
        try {
            const opt = await Option.findById(req.params.id);
            if (opt) {
                const quesId = opt.question;
                const ques = await Question.findByIdAndUpdate(quesId, { $pull: { options: req.params.id } });
                await Option.findByIdAndDelete(req.params.id);
    
                console.log(ques);
                res.send('Option deleted');
            } else {
                res.send('ID does not exist');
            }
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    };
    
}
