const db = require('../db/config');
const user_repository = require('./users_repository');

const repositories = {
    user: user_repository(db)
}

module.exports = repositories;