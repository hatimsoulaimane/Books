module.exports = (services) => {
    const user_controller = {
        getAllUsers: async (req,res) => {
            let result = await services.user.getAllUsers();
            res.send(result);
        },
    }
    return user_controller;
}