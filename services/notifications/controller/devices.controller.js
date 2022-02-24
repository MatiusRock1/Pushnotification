const Model = require('../db/models/devices.model');

class DevicesController{

constructor(){

}

async create(data){
    console.log(data);
    const newdevices = new Model(data);
    await newdevices.save()
    return newdevices ;

}


}

module.exports = DevicesController;

