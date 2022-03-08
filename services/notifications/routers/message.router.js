const express = require('express');

const MessageController = require('../controller/message.controller');

const controllerMessage = new MessageController();
const router = express.Router();

router.get('/topics',
async (req,res,next) =>{
  try {
    const message = await controllerMessage.getAllMessageNumberDevicesTopics();
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
})


router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newdevices=await controllerMessage.create(body);
    res.status(201).json(newdevices);
  } catch (error) {
    next(error);
  }
});


module.exports = router;



