const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestTakenSchema = new Schema({

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
    name:
        {type: String},


    completed: Boolean,
});


const TestTaken = mongoose.model('TestTaken', TestTakenSchema);

module.exports = TestTaken;
