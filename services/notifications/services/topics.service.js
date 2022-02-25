
const { model } = require('mongoose');
const topicsModel = require('../db/models/topics.model');

class TopicsService{

constructor(){

}

async create(data){    
    const newtopics = new topicsModel(data);
    return newtopics.save() ;

}
async registerDeviceTopics(id,data){
    console.log(data.device);
    const deviceTopics = await topicsModel.findOneAndUpdate(
        {_id: id},
        {$push:{devices:data.device}},
        );
     
    
    deviceTopics.devices.push(data.device);
    return deviceTopics;
    
}

}

module.exports = TopicsService;

