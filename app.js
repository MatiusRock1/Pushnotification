const express = require ('express');
const morgan = require ('morgan');
const path = require('path')




const app = express();


//setings
app.set('port', process.env.PORT|| 3000);
app.set('views', path.join(__dirname,'views/firebase'));
app.set('view engine', 'ejs');
app.use("/", express.static(path.join(__dirname, 'public')));
//mongose


const indexRouters = require('./routers/index');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',indexRouters);



app.use(morgan('dev'));

app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})
