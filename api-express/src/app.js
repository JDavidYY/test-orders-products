const express = require('express');
const morgan = require('morgan');


const app = express();

//Middlwares here!
app.use(morgan('dev'));


//Variables
app.set('port', process.env.PORT | 4000);


//Configurations
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes here!
app.use(require('./routes/security.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/product.routes'));
app.use(require('./routes/order.routes'));


module.exports = app;