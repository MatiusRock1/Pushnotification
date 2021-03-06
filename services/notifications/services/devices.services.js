const devicesModel = require('../db/models/devices.model');
const { populate } = require('../db/models/devices.model');
const boom = require('@hapi/boom');


class DevicesService{

constructor(){

}

async create(data){    
    const device = await this.findByToken(data.token);
    if(device){
        throw boom.badRequest('dispositivo ya existe');
    }
    const newdevices = new devicesModel(data);
    return newdevices.save() ;
}
async alldevices(){
    const devices = await devicesModel.find();
    return devices;
}
async alldevicesFilterId(filter){
    console.log(filter);
    const devices = await devicesModel.find(
        {_id: filter},
        {token:1}
        );
    return devices;
}
async findByToken(token){
    const deviceByToken = await devicesModel.findOne(
        {token:token}
    )    
    return deviceByToken;
}
async findById(id){
    const deviceByToken = await devicesModel.findOne(
        {_id:id}
    )
    if(!deviceByToken){
        throw boom.badRequest('dispositivo no existe');
    }
    return deviceByToken;
}
async findOneReturntoken(id){    
    const deviceToken = await devicesModel.findOne(
        {_id: id},
        {token: 1}
        );  
        if(!deviceToken){populate
            throw boom.notFound('Dispositivo no existe');
        } 
    return deviceToken;
}
async deviceIncludeTopicName(id){
    const devices = await devicesModel.findOne({
        _id:id
    });
    await devices.populate('topics',{
        name:1
    });
    return devices;   

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
async findUpdateDevicesTopicDelete(id,idTopic){
    const devices = await devicesModel.findOneAndUpdate(
        {_id:id},
        {$pull:{topics:idTopic}},
        {new:true}
    );
    console.log(devices);
    return devices;
}
    

}

module.exports = DevicesService;

