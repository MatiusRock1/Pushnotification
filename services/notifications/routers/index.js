const express = require('express');
const TopicsController = require('../controller/topics.controller');
//const db = require('./db');
const devicesRouter = require('./devices.router');
const topicsRouter = require('./topics.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/notifications/v1', router);
  router.use('/devices', devicesRouter);
  router.use('/topics', topicsRouter);
}

module.exports = routerApi;
