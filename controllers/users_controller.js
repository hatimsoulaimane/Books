module.exports = (services) => {
    const user_controller = {
        getAll: async (req,res) => {
            let result = await services.user.getAll();
            res.send(result);
        },
    }

}