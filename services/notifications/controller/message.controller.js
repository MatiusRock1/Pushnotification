
const MessageService = require('../services/message.service');
const serviceMessage = new MessageService();

class MessageController{

constructor(){

}

async create(data){
    const newMessage= await serviceMessage.create(data);
    return newMessage;

}

}

module.exports = MessageController;

