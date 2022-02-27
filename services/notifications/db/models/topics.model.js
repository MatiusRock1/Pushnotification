const moongose = require('mongoose')
const Schema = moongose.Schema;



const topicsShema = new Schema({
    name : String,
    createdate : {
        type: Date,
        default: () => Date.now()
    },        
    status : {
        type : Boolean,
        default: true
    },
    devices:[{
        type:Schema.ObjectId,
        ref:"Devices"
    }]

});

module.exports = moongose.model('Topics' , topicsShema);