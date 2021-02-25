const {Router} = require('express');

module.exports = (express, controllers) => {
    const routes = Router();
    const user_router = require('./users_router.js');
    const router = [user_route(express, controllers)];
    
    return routes
};


