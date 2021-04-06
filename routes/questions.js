const router= require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.questions.index)

module.exports = router