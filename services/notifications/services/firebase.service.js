
const boom = require('@hapi/boom');
var adminSdkFirebase = require('firebase-admin');
const { getMessaging } = require('firebase-admin/messaging');
const serviceAccount = require('../../../path/to/serviceAccountKey.json');
adminSdkFirebase.initializeApp({
  credential: adminSdkFirebase.credential.cert(serviceAccount),
}); 

class firebaseService{

constructor(){
  
}

async registerDeviceinTopic(token,topic){
  console.log(token);
    const registrationTokens = [
        token.token
      ];               
      await adminSdkFirebase.messaging().subscribeToTopic(registrationTokens, topic)
        .then((response) => {          
          console.log('Successfully subscribed to topic:', response);
          return "Successfully subscribed to topic";
        })
        .catch((error) => {
          console.log('Error subscribing to topic:', error);
          throw boom.badGateway('error al registrar token en topic firebase');
        });  
}

async sendMessageTopic(topic,title,body){
  var funcionresponse;
        const message = {
            notification: {
                title: title,
                body: body
              },     
          data: {
            //volume : "3.21.15",
            type : "messagetopic"
          },
          topic: topic    
        };        
        await adminSdkFirebase.messaging().send(message)
          .then((response) => {
            console.log('Successfully sent message:', response);
            funcionresponse = { topic : topic,response };
          })
          .catch((error) => {
            console.log('Error sending message:', error);
            throw boom.badGateway('error al enviar mensaje a topic')
          });
      return funcionresponse;
    }

    async listMessageFirebase(){
        
    
}
}


module.exports = firebaseService;

