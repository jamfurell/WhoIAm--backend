const mongoose = ('mongoose')
require('./server')
const Question = require('./models/Question-model')

// Question.create({
//     question: 'Am the life of the party',
//     category: 'extraversion',
//     scale: 1,
//     active: true,
// }, (err, question) => {
//     if(err) console.log('Create error : ', err)
//     console.log('Created : ', question)
// })

// Question.create({
//     question: 'Feel little concern for others',
//     category: 'agreeableness',
//     scale: 5,
//     active: true,
// }, (err, question) => {
//     if(err) console.log('Create error : ', err)
//     console.log('Created : ', question)
// })
// Question.create({
//     question: 'Am always prepared',
//     category: 'conscientiousness',
//     scale: 1,
//     active: true,
// }, (err, question) => {
//     if(err) console.log('Create error : ', err)
//     console.log('Created : ', question)
// })
// Question.create({
//     question: 'Get stressed out easily',
//     category: 'emotional_stability',
//     scale: 5,
//     active: true,
// }, (err, question) => {
//     if(err) console.log('Create error : ', err)
//     console.log('Created : ', question)
// })
// Question.create({
//     question: 'Have a rich vocabulary',
//     category: 'intellect',
//     scale: 1,
//     active: true,
// }, (err, question) => {
//     if(err) console.log('Create error : ', err)
//     console.log('Created : ', question)
// })


// Question.find({scale: 1},  (err, question)=> {
//         console.log('Found question of id less than 3: ', question)
//     }).limit(3).sort({id: 1})

// Question.find({}).pretty();    WHY ISNT IT RETRIEVING ALL THE COLLECTIONS????

// function getFirst20Items() {
//     let items

//     Question 
//         .find({})
//         .limit(20)
//         .sort({id: 1})
        

//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(items)
//         }, 2000)
//     })
// }
// getFirst20Items();

Question.insertMany([
    {
            question: 'Am the life of the party',
            category: 'extraversion',
            scale: 1,
            active: true,
        },
    {
            question: 'Feel little concern for others',
            category: 'agreeableness',
            scale: 5,
            active: true,
        },
    {
            question: 'Am always prepared',
            category: 'conscientiousness',
            scale: 1,
            active: true,
        },
    {
            question: 'Get stressed out easily',
            category: 'emotional_stability',
            scale: 5,
            active: true,
        },
    {
            question: 'Have a rich vocabulary',
            category: 'intellect',
            scale: 1,
            active: true,
        },
], (err,question)=>{
    if(err) console.log('Create error : ', err)
        console.log('Created : ', question)
});

