const express = require('express');

const router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require("../path/to/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


router.get('/',  (req, res) =>{
    
       res.render('index');
});

router.post('/registertokentopic/', (req,res) => {
    const { id } = req.params;
    var token = req.body.token;
    var topic = req.body.topic;
    console.log(token);
    console.log(topic);
    const registrationTokens = [
        ''+token
      ];
      
      // Subscribe the devices corresponding to the registration tokens to the
      // topic.
      admin.messaging().subscribeToTopic(registrationTokens, topic)
        .then((response) => {
          // See the MessagingTopicManagementResponse reference documentation
          // for the contents of response.
          console.log('Successfully subscribed to topic:', response);
        })
        .catch((error) => {
          console.log('Error subscribing to topic:', error);
        });
      

    res.send('hola');
});

router.post('/sendtopic', (req,res) => {
    
    const topic = ''+req.body.topic;
    console.log (topic);

    const message = {
        notification: {
            title: '$FooCorp up 1.43% on the day',
            body: 'prueba'
          },
        
      data: {
        score: '850',
        time: '2:45'
      },
      topic: topic
     //token : 'cHfT7R4RnXL-gXHFFzlmTG:APA91bHAWKjxjAPm9aTkMk6T0HvQCCa8qWEzbV-DrWmYKhDo4YXISoytkYtmPHsoXcDG3eJZ_DzUxWjaVYoOEo1yTsfkfksAl8HxeHspRO9AqQEaYJhexeO3vUdwPk-m_riObcAep8s2',

    };
    
    // Send a message to devices subscribed to the provided topic.
    admin.messaging().send(message)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
      res.send('hola');
});







module.exports = router;