require("dotenv").config()
const db = require('./models');
const data = require('./questionData.json');

db.Question.deleteMany({}, (err, deletedQuestions) => {
    db.Question.create(data.questions, (err, seededQuestions) => {
        if (err) console.log(err);
        
        console.log(data.questions.length, 'Questions created successfully');
        
        process.exit();
    });
});
