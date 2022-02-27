
var adminSDKFirebase = require('firebase-admin');
var serviceAccount = require("../../../path/to/serviceAccountKey.json");

class firebaseService{

constructor(){
    adminSDKFirebase.initializeApp({
        credential: adminSDKFirebase.credential.cert(serviceAccount)
      });
}

async registerDeviceinTopic(token,topic){
    const registrationTokens = [
        token
      ];      
      await adminSDKFirebase.messaging().subscribeToTopic(registrationTokens, topic)
        .then((response) => {          
          console.log('Successfully subscribed to topic:', response);
          return "Successfully subscribed to topic";
        })
        .catch((error) => {
          console.log('Error subscribing to topic:', error);
          return "Error subscribing to topic";
        });  
}

}

module.exports = firebaseService;

