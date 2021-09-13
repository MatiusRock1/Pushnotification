const moongose = require('mongoose')
const Schema = moongose.Schema;

const imageSchema = new Schema({
    url : String,
    format : String,
    type: String

});

const videoSchema = new Schema({
    url : String,
    format : String,
    type: String
});

const devicesSchema = new Schema({
    iddevice : ObjectId,
    read : {
        type : Boolean,
        default: false
    },
    conversiontopurchase : {
        type : Boolean,
        default: false
    },
});

const MessageShema = new Schema({
    title : String,
    shortdescription : String,
    description : String,
    type : String,    
    status : {
        type : Boolean,
        default: true
    },
    image : [imageSchema],
    video : [videoSchema],
    devices : [devicesSchema]   

});

module.exports = moongose.model('message' , MessageShema);