const express = require('express');

const MessageController = require('../controller/message.controller');

const controllerMessage = new MessageController();
const router = express.Router();

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



