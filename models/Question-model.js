const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: {type: String, required: true},
    category: {type: String, required: true},
    scale: {type: Number, required: true},
    completed: Boolean,
});


const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;














