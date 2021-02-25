module.exports = (express, controllers) => {
        const router = express.Router();
    router.route('/users')
        .get(controllers.user.getAll);
return router;
};