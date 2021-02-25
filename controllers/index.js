const user_controller = require('./users_controller.js');


const controllers = {
user: user_controller(services)
}




module.exports = controllers;
