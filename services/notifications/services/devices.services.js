const Model = require('../db/models/devices.model');

class DevicesService{

constructor(){

}

async create(data){    
    const newdevices = new Model(data);
    return newdevices.save() ;

}


}

module.exports = DevicesService;

