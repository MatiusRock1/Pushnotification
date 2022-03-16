
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
const registrationTokens = [
  token.token
];
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
                body: body,                
                image: "https://s3.us-west-2.amazonaws.com/firebase.matius-rock.com/90586_big-1280x720.jpg",
                
              },
              
                   
          data: {
            volume : "3.21.15",
            contents : "http://www.news-magazine.com/world-week/21659772",
            icon: "https://firebase.matius-rock.com/images.jpg",
            sound: "https://firebase.matius-rock.com/wonder_S0Bhneir(1).mp3"
       },
       fcm_options: {
        "analytics_label": "pushtest1"
      },
       webpush: {
        headers: {
          Urgency: "high"
        },
        fcm_options: {
          "link": "https://firebase.matius-rock.com/wonder.mp3",
          "analytics_label": "pushtest1web"
        },
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

