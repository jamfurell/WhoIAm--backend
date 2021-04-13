// imports
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const db = require('./models/index')

const port = process.env.PORT || 4000;
const app = express();

// middleware - JSON parsing
app.use(express.json());
app.use(cors())

// middleware - API routes
app.use('/api/questions', routes.questions);
app.use('/TestTaken', routes.TestTaken);

app.get('/', (req, res) => {
    res.send("Hello World")
})

// connection
app.listen(port, () => console.log(process.env.VAR,`Server is running on port ${port}`));



// db.on('error', console.log('Mongodb conncetion error'))