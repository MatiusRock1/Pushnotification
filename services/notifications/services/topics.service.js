const { model } = require('mongoose');
const topicsModel = require('../db/models/topics.model');
const Firebaseservice = require('./firebase.service');
const DevicesService = require('./devices.services');
const boom = require('@hapi/boom');
const { query } = require('express');

const serviceFirebase = new Firebaseservice();
const serviceDevices= new DevicesService();

class TopicsService{

constructor(){
   
}

async create(data){ 
    data.name = data.name.toLowerCase(); 
    const validationname= await this.finByName(data.name);
    console.log(validationname);  
    if(validationname){
        throw boom.badRequest("topic ya existe");
    } 
    const newtopics = new topicsModel(data);
    return newtopics.save() ;

}
async allTopics(filter){    
    const topics= await topicsModel.find(filter);
    return topics;    
}
async allTopicsnNumberDevice(filter){
    return new Promise((resolve,reject)=>{       
    topicsModel.aggregate()
    .project(filter)
    .exec( function(err, topics) {
        resolve(topics);
    });  
    });
}
async allTopicsOnlyName(){
    const topics= await topicsModel.find().select({        
            name:1,
            _id : 1        
    });
    return topics;
}

async findOne(id){
    const deviceTopics = await topicsModel.findOne({
        _id: id
    });  
    
    return deviceTopics;
}
async finByName(name){
    const deviceTopics = await topicsModel.findOne({
        name: name
    });  
    
    return deviceTopics;
}
async registerDeviceinTopics(idTopic,data) { 
    try {
    const deviceid=data.device;
    const token = await serviceDevices.findOneReturntoken(deviceid);      
    const deviceTopics = await this.findOne(idTopic);  
    if(!deviceTopics){
        throw boom.notFound("topic no existe");
    }   
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
    } catch (error) {
        throw boom.badGateway(' error al registrar token');
    }
    
}

async unRegisterDeviceinTopics(idTopic,data){
    try {
        const deviceid=data.device;
        const token = await serviceDevices.findOneReturntoken(deviceid);      
        const deviceTopics = await this.findOne(idTopic);  
        if(!deviceTopics){
            throw boom.notFound("topic no existe");
        }
        console.log(deviceTopics.devices);
        if(!deviceTopics.devices.includes(deviceid)) {            
            throw boom.badRequest('dispositivo no esta registrado en el topic');
        }
        await serviceFirebase.unRegisterDeviceinTopic(token,deviceTopics.name);
        console.log(deviceTopics);
        console.log(deviceid);
        await deviceTopics.updateOne({
            $pull:{devices:deviceid}
        });
        console.log(deviceid);
        const deviceUpdateTopic=await serviceDevices.findUpdateDevicesTopicDelete(deviceid,idTopic);
        const response = {Response : 0};
         return response;    


    } catch (error) {
        throw boom.badGateway(' error al eliminar token');
    }
    }
}


module.exports = TopicsService;

