const express = require('express');
const TopicsController = require('../controller/topics.controller');
const controllerTopics = new TopicsController();
const router = express.Router();


router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newTopics=await controllerTopics.create(body);
    res.status(201).json(newTopics);
  } catch (error) {
    next(error);
  }
});
router.get('/name/:name',
async(req,res,next) =>{
  try {    
    const name= req.params.name;
    const Topic= await controllerTopics.findByName(name);
    res.status(200).json(Topic);

  } catch (error) {
    next(error);
  }
})
router.get('/',
async(req,res,next) =>{
  try {        
    const Topic= await controllerTopics.getAllTopicsNumberDevices();
    res.status(200).json(Topic);

  } catch (error) {
    next(error);
  }
});


router.get('/:id',
async(req,res,next) =>{
  try {        
    const id = req.params.id;
    const Topic= await controllerTopics.topicById(id);
    res.status(200).json(Topic);

  } catch (error) {
    next(error);
  }
});
router.get('/name/',
async(req,res,next) =>{
  try {        
    const Topic= await controllerTopics.allOnlyName();
    res.status(200).json(Topic);

  } catch (error) {
    next(error);
  }
});
router.get('/test/topics/',
async(req,res,next)=>{
  try {
    const topics= await controllerTopics.getTopicNunberDevicesConcat(req.body);
    res.status(200).json(topics);
  } catch (error) {
    next(error);
  }
});
router.post('/:id/device/',
async(req,res,next) =>{
  try {
    const body = req.body;
    const id= req.params.id;
    console.log(id);
    const newDeviceTopic= await controllerTopics.registerDeviceTopic(id,body);
    res.status(201).json(newDeviceTopic);

  } catch (error) {
    next(error);
  }
});
router.delete('/:id/device/',
async(req,res,next) =>{
try {
  const body = req.body;
    const id= req.params.id;
    console.log(id);
    const DeviceTopic= await controllerTopics.unRegisterDeviceTopic(id,body);
    res.status(201).json(DeviceTopic);
} catch (error) {
  next(error);
}
});


module.exports = router;



