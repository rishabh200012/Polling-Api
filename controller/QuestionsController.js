import Question from '../models/questions.js';
import Option from '../models/options.js';

export default class questionController{
    async create (req, res) {
        try {
            console.log(req.url);
            console.log(req.body);
    
            const newQuestion = await Question.create(req.body);
            console.log(newQuestion);
            res.send(newQuestion);
        } catch (err) {
            console.error("Error in creating the question schema", err);
            res.status(500).send("Error in creating the question schema");
        }
    };
    
    async showDetails (req, res)  {
        try {
            console.log(req.params.id);
    
            const question = await Question.findById(req.params.id).populate('options');
    
            if (question) {
                res.send(question);
            } else {
                res.status(404).send("Question not found");
            }
        } catch (err) {
            console.error("Error in fetching question details:", err);
            res.status(500).send("Error in fetching question details");
        }
    };
    
    async deleteQues(req, res) {
        try {
            const question = await Question.findByIdAndDelete(req.params.id);
    
            if (question) {
                // Delete all options associated with this question
                await Option.deleteMany({ question: req.params.id });
                res.send("Question deleted");
            } else {
                res.status(404).send("Question not found");
            }
        } catch (err) {
            console.error("Error in deleting question:", err);
            res.status(500).send("Error in deleting question");
        }
    };
    
}
