const router= require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.questions.index)
router.get('/:id', ctrl.questions.show);

module.exports = router