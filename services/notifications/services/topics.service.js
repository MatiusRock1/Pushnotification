
const topicsModel = require('../db/models/topics.model');

class TopicsService{

constructor(){

}

async create(data){    
    const newtopics = new topicsModel(data);
    return newtopics.save() ;

}


}

module.exports = TopicsService;

