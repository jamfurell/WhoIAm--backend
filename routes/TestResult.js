const router= require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.TestResult.index)
router.get('/:id', ctrl.TestResult.show);
router.post('/', ctrl.TestResult.create);

module.exports = router