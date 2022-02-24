const Model = require('../db/models/devices.model');

class DevicesController{

constructor(){

}

async create(data){    
    const newdevices = new Model(data);
    return newdevices.save() ;

}


}

module.exports = DevicesController;

