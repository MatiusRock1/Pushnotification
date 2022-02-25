const devicesModel = require('../db/models/devices.model');
const boom = require('@hapi/boom');

class DevicesService{

constructor(){

}

async create(data){    
    const device = await this.findByToken(data.token);
    const newdevices = new devicesModel(data);
    return newdevices.save() ;
}
async findByToken(token){
    const deviceByToken = await devicesModel.findOne(
        {token:token}
    )
    if(deviceByToken){
        throw boom.badRequest('dispositivo ya existe');
    }
    return deviceByToken;
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
async findUpdateDevicesTopic(id,idTopic){
    const devices = await devicesModel.findOneAndUpdate(
        {_id:id},
        {$push:{topics:idTopic}},
        {new:true}
    );
    console.log(devices);
    return devices;
}
    

}

module.exports = DevicesService;

