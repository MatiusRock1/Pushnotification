const express = require('express');

const DevicesController = require('../controller/devices.controller');

const controllerDevices = new DevicesController();
const router = express.Router();



router.get('/token/:id',async (req, res, next) => {
  try {
    const token = req.params.id;
    const devices = await controllerDevices.findByToken(token);
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});
router.get('/:id/topic',async (req, res, next) => {
  try {
    const id = req.params.id;
    const devices = await controllerDevices.deviceIncludeTopicName(id);
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});
router.get('/:id',async (req, res, next) => {
  try {
    const deviceId = req.params.id;
    const devices = await controllerDevices.findById(deviceId);
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});
router.get('/',async (req, res, next) => {
  try {
    const devices = await controllerDevices.all();
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});
router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newdevices=await controllerDevices.create(body);
    res.status(201).json(newdevices);
  } catch (error) {
    next(error);
  }
});


module.exports = router;



