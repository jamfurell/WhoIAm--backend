const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("MongoDB successfully connected..."))
.catch(err => console.log(`MongoDB connection error: ${error}`))

const db = mongoose.connection

module.exports = {
    db,
    Question: require('./Question-model'),
    TestTaken: require('./TestTaken'),
    TestResult: require('./TestResult'),
}
