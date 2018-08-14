const express = require('express');
const router = express.Router();
const fitCtrl = require('../controllers/fit.ctrl');

/* GET users listing. */
router.get('/', fitCtrl.find);
router.post('/', fitCtrl.create);

module.exports = router;
