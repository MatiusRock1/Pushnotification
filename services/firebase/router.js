var firebasecontructor = require('../firebase/firebase');


exports.registerintopic = async function (req, res, next) {
    var token = req.body.token;
    var topic = req.body.topic;
    var response = await firebasecontructor.setregistertokenintopic(topic,token);       
    res.json({ "result" : response });
}

exports.sendmessagetopic = async function (req, res, next) {
    var topic = req.body.topic;
    var title = req.body.title;
    var body = req.body.body;
    var response = await firebasecontructor.sendmessagetopic(topic,title,body);       
    res.json({ "result" : response });
}