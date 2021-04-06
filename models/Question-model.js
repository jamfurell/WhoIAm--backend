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
















// const QuestionSchema = new Schema ({
//     name: {type: String, required: true},
//     founded: {type: Date, default: Date.now},
//     employees:{type: Number},
//     active: Boolean,
//     products: [{type: String}],
//     CEO: {name: String, age: Number}
// })