module.exports = (repositories) => {
    const user_service= {
        getAllUsers: async (data) => {
            const user = await repositories.user.getAllUsers();
            console.log("USER =>", user)
            return user
        }
    }
    
    return user_service;
}
