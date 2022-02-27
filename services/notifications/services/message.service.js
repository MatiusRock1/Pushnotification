const messageModel = require('../db/models/message.model');
const { populate } = require('../db/models/message.model');
const boom = require('@hapi/boom');


class MessageService{

constructor(){

}

async create(data){    
    const newMessage =await new messageModel(data);
    return newMessage;
}
    

}

module.exports = MessageService;

