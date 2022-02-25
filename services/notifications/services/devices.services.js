const devicesModel = require('../db/models/devices.model');
const boom = require('@hapi/boom');

class DevicesService{

constructor(){

}

async create(data){    
    const newdevices = new devicesModel(data);
    return newdevices.save() ;
}
async findOneReturntoken(id){    
    const deviceToken = await devicesModel.findOne(
        {_id: id},
        {token: 1}
        );  
        if(!deviceToken){
            throw boom.notFound("Dispositivo no existe");
        } 
    return deviceToken;
}


}

module.exports = DevicesService;

