const moongose = require('mongoose');
const Schema = moongose.Schema;

const TypeSchema = {
    name: String,
    url_image:String,
    screenid: String,
};
const targetSchema = {
    name: String,
    device:{
        type: Schema.ObjectId,
        ref: "Devices"
    },
    topics:[{
        type: Schema.ObjectId,
        ref: "Topics"
    }]
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
    target: targetSchema,
    createdate : {
        type: Date,
        default: () => Date.now()
    },
    numberDevices: Number,
    status : {
        type : Boolean,
        default: true
    },
    
    shedule: ScheduletionSchema     
    

});

module.exports = moongose.model('Message' , DevicesShema);