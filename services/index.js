const repositories = require('../repositories/index')
const user_service = require('./users_services');
const services = {
    user: user_service(repositories)
}

module.exports = services;