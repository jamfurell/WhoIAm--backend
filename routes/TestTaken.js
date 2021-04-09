const router= require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.TestTaken.index)
router.get('/:id', ctrl.TestTaken.show);
router.post('/', ctrl.TestTaken.create);

module.exports = router