const repositories = require('../repositories');

module.exports = (repositories) => {
    const user_service= {
        getAllUsers: async () => {
            return repositories.user.getAllUsers();
        }
    }
    
    return user_service;
}
