const messageModel = require('../db/models/message.model');
const { populate } = require('../db/models/message.model');
const boom = require('@hapi/boom');
const FirebaseService = require('./firebase.service');
const serviceFirebase = new FirebaseService();
const TopicsService = require('./topics.service');
const serviceTopics = new TopicsService();
const DevicesService = require('./devices.services');
const serviceDevices = new DevicesService();



class MessageService{

constructor(){

}

async create(data){    
    const topics = data.target.topics;
    const targetname= data.target.name; 
    const device = data.target.device;

    
    var firebaseTopicsResponse = [];
    switch(targetname){
       case 'topic':
        for (let value of topics){ 
            console.log(value);
            const topicName = await serviceTopics.findOne(value);
            console.log(topicName.name);
            firebaseTopicsResponse.push(await serviceFirebase.sendMessageTopic(topicName.name,data.name,data.description));
            value += 1;
        }
       break;
       case 'device':     
       const devicesList = await serviceDevices.findById(device);
       console.log(devicesList);
       firebaseTopicsResponse.push(await serviceFirebase.sendMessageToken(devicesList.token,data.name,data.description))
        break;
       case groups :
        var deviceListArray = [];
        for(let value of devicesList){
             deviceListArray.push(value.token);
             value+=1;
        }
       break;
        default:
            throw boom.badGateway("data en target incorrecta")
        break;
            
    }
    
    
    
    const newMessage =new messageModel(data);
    newMessage.save();
    const response = {result: 0 , send : firebaseTopicsResponse}
    return response;
}
    

}

module.exports = MessageService;

