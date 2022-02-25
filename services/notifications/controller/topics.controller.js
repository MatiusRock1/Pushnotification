
const TopicsService = require('../services/topics.service');
const service = new TopicsService();

class TopicsController{

constructor(){

}

async create(data){
    const newtopics= await service.create(data);
    return newtopics;

}
async registerDeviceTopic(id,data){
    const registerDeviceTopics = await service.registerDeviceinTopics(id,data);
    return registerDeviceTopics;
}



}

module.exports = TopicsController;

