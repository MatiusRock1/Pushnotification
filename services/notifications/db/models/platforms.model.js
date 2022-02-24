const moongose = require('mongoose')
const Schema = moongose.Schema;
const platformShema = new Schema({
    name : String,
    createdate : Date,       
    status : {
        type : Boolean,
        default: true
    },
    aplication:[{
        type:Schema.ObjectId,        
    }]

});

module.exports = moongose.model('platforms' , platformShema);