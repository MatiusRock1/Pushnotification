const messageModel = require('../db/models/message.model');
const { populate } = require('../db/models/message.model');
const boom = require('@hapi/boom');
const FirebaseService = require('./firebase.service');
const serviceFirebase = new FirebaseService();
const TopicsService = require('./topics.service');
const { shallowCopyFromList } = require('ejs/lib/utils');
const serviceTopics = new TopicsService();



class MessageService{

constructor(){

}

async create(data){    
    const topics = data.target.topics;
    const targetname= data.target.name; 

    
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
        console.log('El kilogramo de naranjas cuesta $0.59.');
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

