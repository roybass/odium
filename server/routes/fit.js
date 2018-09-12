const express = require('express');
const router = express.Router();
const auth = require('../auth/auth');
const fitCtrl = require('../controllers/fit.ctrl');

/* GET users listing. */
router.get('/', fitCtrl.find.bind(fitCtrl));
router.post('/', fitCtrl.create.bind(fitCtrl));
router.get('/skills', auth.ensureAuthenticated, fitCtrl.getSkills.bind(fitCtrl));

module.exports = router;
