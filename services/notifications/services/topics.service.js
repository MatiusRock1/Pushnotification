const { model } = require('mongoose');
const topicsModel = require('../db/models/topics.model');
const Firebaseservice = require('./firebase.service');
const DevicesService = require('./devices.services');
const boom = require('@hapi/boom');

const serviceFirebase = new Firebaseservice();
const serviceDevices= new DevicesService();

class TopicsService{

constructor(){
   
}

async create(data){    
    const newtopics = new topicsModel(data);
    return newtopics.save() ;

}
async findOne(id){
    console.log(id);
    const deviceTopics = await topicsModel.findOne({
        _id: id
    });  
    if(!deviceTopics){
        throw boom.notFound("topic no existe");
    } 
    return deviceTopics;
}
async registerDeviceinTopics(idTopic,data){ 
    const deviceid=data.device;
    const token = await serviceDevices.findOneReturntoken(deviceid);      
    const deviceTopics = await this.findOne(idTopic);    
    if(deviceTopics.devices.includes(deviceid)) {
        throw boom.badRequest('dispositivo ya registrado en el topic');
    } 
    await serviceFirebase.registerDeviceinTopic(token,deviceTopics.name);
    await deviceTopics.updateOne({
        $push:{devices:deviceid}
        }
    );    
    const deviceUpdateTopic = await serviceDevices.findUpdateDevicesTopic(deviceid,idTopic); 
    const response = {Response : 0};
    return response;    
}
}

module.exports = TopicsService;

