const express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        cookieParser = require('cookie-parser');

// server routes/controllers
const routes = require('./routes/index');        


const app = express();

//config bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));

//config cors
app.use(cors());

//config cookieParser
app.use(cookieParser());

//config de la route principale
app.use('/bookstore_api', routes());
console.log('salut');

module.exports =  app;


