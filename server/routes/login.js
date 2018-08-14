const express = require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login.ctrl');

router.get('/', loginCtrl.get);

module.exports = router;