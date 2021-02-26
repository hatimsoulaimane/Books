module.exports = (express, controllers) => {
    const user_router = require('./users_router');
    const router = [
        user_router(express, controllers)
    ]
    return router
};


