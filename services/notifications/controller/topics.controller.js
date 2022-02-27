
const TopicsService = require('../services/topics.service');
const serviceTopics = new TopicsService();

class TopicsController{

constructor(){

}

async create(data){
    const newtopics= await serviceTopics.create(data);
    return newtopics;

}
async all(){
    const topics= await serviceTopics.allTopics();
    return topics;
}
async allOnlyName(){
    const topics = await serviceTopics.allTopicsOnlyName();
    return topics;
}
async findByName(data){
    const topics = await serviceTopics.finByName(data);
    return topics;
}
async registerDeviceTopic(id,data){
    const registerDeviceTopics = await serviceTopics.registerDeviceinTopics(id,data);
    return registerDeviceTopics;
}



}

module.exports = TopicsController;

