const moongose = require('mongoose')
const Schema = moongose.Schema;


const devicesSchema = new Schema({
    iddevice : ObjectId,
    status : {
        type : Boolean,
        default: true
    }
});

const topicsShema = new Schema({
    name : String,
    createdate : Date,       
    status : {
        type : Boolean,
        default: true
    } 

});

module.exports = moongose.model('topics' , topicsShema);