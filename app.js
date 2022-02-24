const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const routerNotificatios = require('./services/notifications/routers');
const dotenv = require('dotenv');
const db = require('./services/notifications/db/db');




const app = express();


//setings
app.set('port', process.env.PORT|| 3000);
app.set('views', path.join(__dirname,'views/firebase'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(morgan('dev'));
//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,process.env.NODE_ENV + '.env')
});
//mongose
db.connectMongoDB(process.env.Mondodb);
//Routers
routerNotificatios(app);






app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
