const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestResultSchema = new Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    extraversion_score: [
        { type: Number, required: true}  
    ],
    agreeableness_score: [
        { type: Number, required: true}  
    ],
    conscientiousness_score: [
        { type: Number, required: true}  
    ],
    emotional_stability_score: [
        { type: Number, required: true}  
    ],
    intellect_score: [
        { type: Number, required: true}  
    ],
    created_at: {type: Date, default: Date.now},
    completed: Boolean,
});



const TestResult = mongoose.model('TestResult', TestResultSchema);

module.exports = TestResult;
