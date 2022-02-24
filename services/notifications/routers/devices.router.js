const express = require('express');

const DevicesService = require('../controller/devices.controller');

const service = new DevicesService();
const router = express.Router();


router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newdevices=await service.create(body);
    res.status(201).json(newdevices);
  } catch (error) {
    next(error);
  }
});


module.exports = router;



