const user_controller = require('./users_controller');
const services = require('../services/index');


const controllers = {
    user: user_controller(services)
}




module.exports = controllers;
