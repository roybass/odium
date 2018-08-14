var express = require('express');
var router = express.Router();
var cbCtrl = require('../controllers/callback.ctrl');

/* GET home page. */
router.get('/', cbCtrl.get);

module.exports = router;