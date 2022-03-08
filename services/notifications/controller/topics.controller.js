
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
async topicById(id){
    const topic= await serviceTopics.findOne(id);
    return topic;
}
async findByName(data){
    const topics = await serviceTopics.finByName(data);
    return topics;
}
async registerDeviceTopic(id,data){
    const registerDeviceTopics = await serviceTopics.registerDeviceinTopics(id,data);
    return registerDeviceTopics;
}
async unRegisterDeviceTopic(id,data){
    const unRegisterDeviceinTopic = await serviceTopics.unRegisterDeviceinTopics(id,data);
    return unRegisterDeviceinTopic;
}
async getAllTopicsNumberDevices(){
    const filter = {        
        name: 1,
        status: 1,
        devices: {$size:"$devices"}        
}
const message = await serviceTopics.allTopicsnNumberDevice(filter);
console.log(message);
return { topics : message};
}
async getTopicNunberDevicesConcat(){
    const topicsFilter= ["621cc764a5edd3acacf4af83","621d0d90ce944c5dcdb91177"];
    const topics = await serviceTopics.getTopicNumberDevicesConcat(topicsFilter);
    return topics;
} 
}





module.exports = TopicsController;

