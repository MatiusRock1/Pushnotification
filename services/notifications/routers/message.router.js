const express = require('express');
const mimeTypes = require('mime-types');
const MessageController = require('../controller/message.controller');

const controllerMessage = new MessageController();
const router = express.Router();

var nameFile = "";

const multer = require('multer');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');

aws.config.update({region: 'us-west-2'});
var s3 = new aws.S3({apiVersion: '2006-03-01'});

const uploads3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'firebase.matius-rock.com/images',
    metadata: async function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: async function (req, file, cb) {
      const nametemp =  Date.now() + "." + mimeTypes.extension(file.mimetype);
      nameFile = nametemp;
      cb(null, nametemp);
    }
  })
});

async function name (name){
  nameFile = name;
  
}

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
router.post('/image',
  uploads3.single('Image'),
  async ( req,res, next) =>{
    try {
      res.status(201).json({name: nameFile});
    } catch (error) {
      next(error);
    }
})


module.exports = router;



