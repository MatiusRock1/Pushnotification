const Model = require('../db/models/devices.model');
const DevicesService = require('../services/devices.services');
const service = new DevicesService();

class DevicesController{

constructor(){

}

async create(data){
    const newdevices= await service.create(data);
    return newdevices;

}


}

module.exports = DevicesController;

