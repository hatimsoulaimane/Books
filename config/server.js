const express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        cookieParser = require('cookie-parser'),
        controllers = require('../controllers/index'),
        routes =require ('./routes/index');      


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
app.get('/', function (request, response) {
    response.json({ message: 'salut! ' });
});
app.use('/bookstore_api', routes(express, controllers));

module.exports =  app;


