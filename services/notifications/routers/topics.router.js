const express = require('express');
const TopicsController = require('../controller/topics.controller');

const service = new TopicsController();
const router = express.Router();


router.post('/',
 async (req, res, next) => {
  try {
    const body = req.body;
    const newtopics=await service.create(body);
    res.status(201).json(newtopics);
  } catch (error) {
    next(error);
  }
});


module.exports = router;



