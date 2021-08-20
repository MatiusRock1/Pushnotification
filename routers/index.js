const express = require('express');
const router = express.Router();
var firebasecontructor = require('../services/firebase/firebase');
var firebaserouter = require('../services/firebase/router');

router.get('/',  (req, res) =>{    
       res.render('index');
});
router.post('/registertokentopic', firebaserouter.registerintopic);
/*
router.post('/sendtopic', (req,res) => {
     var topic = req.body.topic;
     var title = req.body.title;
     var body = req.body.body;
     firebasecontructor.sendmessagetopic(topic,title,body);    
      res.send('hola');
});
*/






module.exports = router;