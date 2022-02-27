const moongose = require('mongoose');
const Schema = moongose.Schema;

const DevicesShema = new Schema({
    aplication : String,
    platform : {
        type: Schema.ObjectId,
        ref: "Platform"
    },
    createdate : {
        type: Date,
        default: () => Date.now()
    },  
    token : String,    
    status : {
        type : Boolean,
        default: true
    },
    topics : [{
        type: Schema.ObjectId,
        ref: "Topics"
    }],
    groups : [{
        type: Schema.ObjectId,
        ref: "Groups"
    }],
    
    
    

});

module.exports = moongose.model('Devices' , DevicesShema);