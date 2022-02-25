const express = require('express');

const DevicesController = require('../controller/devices.controller');

const controller = new DevicesController();
const router = express.Router();

router.get('/',async (req, res, next) => {
  
});

router.get('/token/:id',async (req, res, next) => {
  try {
    const token = req.params.id;
    const devices = await controller.findByToken(token);
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});
router.get('/:id',async (req, res, next) => {
  try {
    const deviceId = req.params.id;
    const devices = await controller.findById(deviceId);
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});



router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newdevices=await controller.create(body);
    res.status(201).json(newdevices);
  } catch (error) {
    next(error);
  }
});


module.exports = router;



