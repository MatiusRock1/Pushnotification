
const MessageService = require('../services/message.service');
const serviceMessage = new MessageService();

class MessageController{

constructor(){

}

async create(data){
    const newMessage= await serviceMessage.create(data);
    return newMessage;

}
async getAllMessageNumberDevicesTopics(){
    const message = await serviceMessage.getAllMessageNumberDeviceTopics();
    return message;
}

}

module.exports = MessageController;

