const moongose = require('mongoose')
const Schema = moongose.Schema;

const TopicSchema = new Schema({
    idtopic : ObjectId,
    name : String

});

const DevicesShema = new Schema({
    aplication : String,
    platform : String,
    createdate : Date,
    token : String,    
    status : {
        type : Boolean,
        default: true
    },
    topics : [TopicSchema]
    

});

module.exports = moongose.model('Devices' , DevicesShema);