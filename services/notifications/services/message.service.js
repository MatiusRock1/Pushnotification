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
    var numberDevice = 0;
    const image = data.type.url_image
    switch(targetname){
       case 'topic':
        numberDevice = await serviceTopics.getTopicNumberDevicesConcat(topics);
        for (let value of topics){ 
           
            console.log(value);
            const topicName = await serviceTopics.findOne(value);
            console.log(topicName.name);
            firebaseTopicsResponse.push(await serviceFirebase.sendMessageTopic(topicName.name,data.name,data.description,image));
            value += 1;
        }
       break;
       case 'device':     
       const devicesList = await serviceDevices.findById(device);
       console.log(devicesList);
       firebaseTopicsResponse.push(await serviceFirebase.sendMessageToken(devicesList.token,data.name,data.description,image))
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
    console.log(numberDevice);
    data.numberDevices=numberDevice;
    const newMessage =new messageModel(data);
    newMessage.save();
    const response = {result: 0 , send : firebaseTopicsResponse}
    return response;
}

async getAllMessageNumberDeviceTopics(){
   
const messages= await messageModel.aggregate([
    {
        $match: {
            "target.name" : "topics"
        },
    },
    {
        $lookup: {
        from: 'topics',
        localField: 'target.topics',
        foreignField: '_id',
        as: 'topicsDevice'
    },
},
{ $project: { name: 1, description: 1,"topicsDevice.name":1, "topicsDevice.devices" :{$size:"$topicsDevice.devices"} } },
]);
return {messages :messages};

    
    
    
    
}
async populateAllMessageTopics(){
    const messages= messageModel.find({
        "target.name" : "topics"
    });
    await messages.populate('target.topics');

    /*return new Promise((resolve,reject)=>{               
        messageModel.find({
            "target.name" : "topics"
        })
        .populate('target.topics',{            
        })
        .project(filter)
        .exec((error,populated) =>{
            resolve(populated);
        })         
        });   */
}
async returnNumberDeviceInTopic(){
    return new Promise((resolve,reject)=>{       
        topicsModel.aggregate()
        .project(filter)
        .exec( function(err, topics) {
            resolve(topics);
        });  
        });
}
}


module.exports = MessageService;

