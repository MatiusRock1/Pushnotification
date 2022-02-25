const { model } = require('mongoose');
const topicsModel = require('../db/models/topics.model');
const Firebaseservice = require('./firebase.service');
const boom = require('@hapi/boom');

serviceFirebase = new Firebaseservice();

class TopicsService{

constructor(){
   
}

async create(data){    
    const newtopics = new topicsModel(data);
    return newtopics.save() ;

}
async findOne(id){
    const deviceTopics = await topicsModel.findOne({
        _id: id
    });  
    return deviceTopics;
}
async registerDeviceTopics(id,data){ 
    const device=data.device;
    const deviceTopics = await this.findOne(id);   
    if(deviceTopics.devices.includes(data.device)) {
        throw boom.badRequest('dispositivo ya registrado en el topic');
    } 
    await serviceFirebase.registerDeviceinTopic(data.token,deviceTopics.name);
    await deviceTopics.updateOne({
        $push:{devices:device}
        }
        );
    
    const response = {Response : 0};
    return response;    
}
}

module.exports = TopicsService;

