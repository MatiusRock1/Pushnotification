const express = require('express');
const router = express.Router();
var firebasecontructor = require('../services/firebase/firebase');
var firebaserouter = require('../services/firebase/router');


router.post('/registertokentopic', firebaserouter.registerintopic);
router.post('/sendtopic', firebaserouter.sendmessagetopic);








module.exports = router;