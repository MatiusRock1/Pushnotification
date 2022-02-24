const express = require('express');
//const db = require('./db');
const devicesRouter = require('./devices.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/notifications/v1', router);
  router.use('/devices', devicesRouter);
}

module.exports = routerApi;
