const db = require('mongoose');
db.Promise = global.Promise;

async function connectMongoDB (url){
   
    console.log(url);
    await db.connect(url, {
        useNewUrlParser: true,
    });
    console.log('[db]Conectada con exito');
}

module.exports = {
    connectMongoDB
}
