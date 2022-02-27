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
        var funcionresponse;
        const message = {
            notification: {
                title: title,
                body: body
              },         

          data: {
            //volume : "3.21.15",
            type : "vavalidacion"
          },
          topic: topic
          
         
    
        };
        
        // Send a message to devices subscribed to the provided topic.
        admin.messaging().send(message)
          .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            funcionresponse = "Successfully sent message";
          })
          .catch((error) => {
            console.log('Error sending message:', error);
            funcionresponse = "Error sending message";
          });
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(funcionresponse);
            }, 2000);
          });
    }

    function sendpushvalidation(token){
        var funcionresponse;
        const message = {
        data: {
             type : "validacion"
          },
          token: token        
             
        };        
          admin.messaging().send(message)
          .then((response) => {
            

            // Response is a message ID string.
            console.log('Successfully sent message:', response);
            funcionresponse = true;
          })
          .catch((error) => {
            console.log('Error sending message:', error);
            funcionresponse = false;
          });
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(funcionresponse);
            }, 2000);
          });
    }

    function gettopiclist(){
        
    }

  
    exports.gettopiclist = gettopiclist;
    exports.sendmessagetopic = sendmessagetopic;
    exports.setregistertokenintopic= setregistertokenintopic;
