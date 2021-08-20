var admin = require('firebase-admin');
const { token } = require('morgan');
var serviceAccount = require("../../path/to/serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
   function  setregistertokenintopic (topic,token) {
      var funcionresponse ;
        const registrationTokens = [
            token
          ];      
          admin.messaging().subscribeToTopic(registrationTokens, topic)
            .then((response) => {          
              console.log('Successfully subscribed to topic:', response);
              funcionresponse = "Successfully subscribed to topic";
            })
            .catch((error) => {
              console.log('Error subscribing to topic:', error);
              funcionresponse = "Error subscribing to topic";
            });  
        return new Promise(resolve => {
        setTimeout(() => {
          resolve(funcionresponse);
        }, 2000);
      });
          
    } 

    function sendmessagetopic (topic,title,body){
        const message = {
            notification: {
                title: title,
                body: body
              },
            
          data: {
            score: '850',
            time: '2:45'
          },
          topic: topic
         
    
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
    }

  

    exports.sendmessagetopic = sendmessagetopic;
    exports.setregistertokenintopic= setregistertokenintopic;
