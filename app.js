const express = require ('express');
const morgan = require ('morgan');
const path = require('path');
const routerNotificatios = require('./services/notifications/routers');
const dotenv = require('dotenv');
const db = require('./services/notifications/db/db');
const { logErrors, errorHandler, boomErrorHandler } = require('./services/notifications/middlewares/error.handler');




const app = express();


//setings
app.set('port', process.env.PORT|| 3000);
app.use(express.json());
app.use(morgan('dev'));

//configuracion de variables de entorno
dotenv.config({
    path: path.resolve(__dirname,'.env')
});
console.log()
//mongose
db.connectMongoDB(process.env.Mondodb);
//Routers
routerNotificatios(app);

//midlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


//app.set('views', path.join('/views/'));
app.set('views', path.join(__dirname,'views/firebase'));
app.set('view engine', 'ejs');
app.use("/", express.static(path.join(__dirname, './views/firebase')));

app.get('/',  (req, res) =>{    
    res.render('index');
});




app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
