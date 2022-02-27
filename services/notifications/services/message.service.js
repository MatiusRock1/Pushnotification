const messageModel = require('../db/models/message.model');
const { populate } = require('../db/models/message.model');
const boom = require('@hapi/boom');


class MessageService{

constructor(){

}

async create(data){    
    console.log(data);
    const newMessage =new messageModel(data);
    return newMessage.save();
}
    

}

module.exports = MessageService;

