const express = require('express');
const TopicsController = require('../controller/topics.controller');
const controller = new TopicsController();
const router = express.Router();


router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newTopics=await controller.create(body);
    res.status(201).json(newTopics);
  } catch (error) {
    next(error);
  }
});
router.post('/:id/device',
async(req,res,next) =>{
  try {
    const body = req.body;
    const id= req.params.id;
    console.log(id);
    const newDeviceTopic= await controller.registerDeviceTopic(id,body);
    res.status(201).json(newDeviceTopic);

  } catch (error) {
    next(error);
  }
})


module.exports = router;



