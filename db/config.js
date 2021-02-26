const mysql = require('mysql2'),
    config = require('../config/env');

const db = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_name
});

db.connect(function(err) {
    if (err) throw err;
    console.log('test avec le db connect')
})
module.exports = db;