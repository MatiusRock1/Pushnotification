
const DevicesService = require('../services/devices.services');
const serviceDevices = new DevicesService();

class DevicesController{

constructor(){

}

async create(data){
    const newdevices= await serviceDevices.create(data);
    return newdevices;

}
async findByToken(token){
    const devices = await serviceDevices.findByToken(token);
    return devices;
}
async findById(id){
    const device = await serviceDevices.findById(id);
    return device;
}



}

module.exports = DevicesController;

