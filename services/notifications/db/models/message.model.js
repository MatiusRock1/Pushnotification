const moongose = require('mongoose');
const Schema = moongose.Schema;

const TypeSchema = {
    name: String,
    url_image:String,
    url_video: String,
    screenid: String,
};
const ObjectiveSchema = {
    name: String,
    idDevice:{
        type: Schema.ObjectId,
        ref: "Devices"
    },
    idTopic:{
        type:Schema.ObjectId,
        ref: "Topics"
    }
};
const SoundSchema = {
    isTrue:{
        type: Boolean,
        default: true
    },
    url_sound: String,
};
const ScheduletionSchema = {
    isTrue:{
        type: Boolean,
        default: false
    },
    date: Date,
};
const DevicesShema = new Schema({
    name : String,
    description: String,
    type: TypeSchema,
    Objetive: ObjectiveSchema,
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