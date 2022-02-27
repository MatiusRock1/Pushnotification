const moongose = require('mongoose');
const Schema = moongose.Schema;

const TypeSchema = new Schema({
    name: String,
    url_image:String,
    url_video: String,
    screenid: String,
});
const ObjectiveSchema = new Schema({
    name: String,
    idDevice:{
        type: Schema.ObjectId,
        ref: "Devices"
    },
    idTopic:{
        type:Schema.ObjectId,
        ref: "Topics"
    }
});
const SoundSchema = new Schema({
    isTrue:{
        type: Boolean,
        default: true
    },
    url_Sound: String,
});
const ScheduletionSchema = new Schema({
    isTrue:{
        type: Boolean,
        default: true
    },
    date: Date,
});
const DevicesShema = new Schema({
    name : String,
    description: String,
    type: TypeSchema,
    Objetive: ObjectiveSchema,
    platform : {
        type: Schema.ObjectId,
        ref: "Platform"
    },
    createdate : {
        type: Date,
        default: () => Date.now()
    },    
    status : {
        type : Boolean,
        default: true
    },
    sound : SoundSchema,
    shedule: ScheduletionSchema     
    

});

module.exports = moongose.model('Message' , DevicesShema);