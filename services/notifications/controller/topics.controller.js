
const TopicsService = require('../services/topics.service');
const service = new TopicsService();

class TopicsController{

constructor(){

}

async create(data){
    const newtopics= await service.create(data);
    return newtopics;

}


}

module.exports = TopicsController;

