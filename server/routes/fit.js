var express = require('express');
var router = express.Router();
var fitCtrl = require('../controllers/fit.ctrl');

/* GET users listing. */
router.get('/', fitCtrl.find);
router.post('/', fitCtrl.create);

module.exports = router;
