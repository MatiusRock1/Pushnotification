const moongose = require('mongoose')
const Schema = moongose.Schema;



const groupsShema = new Schema({
    name : String,
    createdate : Date,       
    status : {
        type : Boolean,
        default: true
    },
    devices:[{
        type:Schema.ObjectId,
        ref:"Devices"
    }]

});

module.exports = moongose.model('topics' , topicsShema);