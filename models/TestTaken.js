const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestTakenSchema = new Schema({
    // question_one: {type: String, required: true},
    // answer_one: {type: Number, required: true},

    // extraversion: [
    //     {type: mongoose.Schema.Types.ObjectId,
    //     ref: "Question"},
    //     {type: mongoose.Schema.Types.ObjectId,
    //     ref:"User"},
    //     {answer_extraversion: [{type: Number, required: true}]},
    // ],
    

    Question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
        },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    extraversion: 
        { type: Number, required: true},
    agreeableness: 
        { type: Number, required: true},
    conscientiousness: 
        { type: Number, required: true},
    emotional_stability: 
        { type: Number, required: true},
    intellect: 
        { type: Number, required: true},




    completed: Boolean,
});

// const QuestionSchema = new Schema ({
//     name: {type: String, required: true},
//     founded: {type: Date, default: Date.now},
//     employees:{type: Number},
//     active: Boolean,
//     products: [{type: String}],
//     CEO: {name: String, age: Number}
// })


const TestTaken = mongoose.model('TestTaken', TestTakenSchema);

module.exports = TestTaken;
