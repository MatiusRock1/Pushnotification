
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
async unRegisterDeviceinTopic(token,topic){
  // These registration tokens come from the client FCM SDKs.
const registrationTokens = [
  token.token
];

// Unsubscribe the devices corresponding to the registration tokens from
// the topic.

await adminSdkFirebase.messaging().unsubscribeFromTopic(registrationTokens, topic)
  .then((response) => {  
    console.log('Successfully unsubscribed from topic:', response);
  })
  .catch((error) => {
    console.log('Error unsubscribing from topic:', error);
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

    async sendMessageToken(token,title,body){
      console.log(token);
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
              token: token    
            };        
            await adminSdkFirebase.messaging().send(message)
              .then((response) => {
                console.log('Successfully sent message:', response);
                funcionresponse = { token : token,response };
              })
              .catch((error) => {
                console.log('Error sending message:', error);
                throw boom.badGateway('error al enviar mensaje a topic')
              });
          return funcionresponse;
        }
}


module.exports = firebaseService;

