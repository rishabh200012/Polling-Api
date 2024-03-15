import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const questionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    options: [{
        type: Schema.Types.ObjectId,
        ref: 'Option'
    }]
});

const Question = model('Question', questionSchema);

export default Question;
