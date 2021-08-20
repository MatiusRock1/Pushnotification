var firebasecontructor = require('../firebase/firebase');
exports.registerintopic = async function (req, res, next) {
    var token = req.body.token;
    var topic = req.body.topic;
    var response = await firebasecontructor.setregistertokenintopic(topic,token);       
    res.json({ "result" : response });
}