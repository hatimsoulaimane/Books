const controllers = require("../controllers");

module.exports= (db) => {
    const user_repository = {
        getAllUsers: async() => {
            const [rows] = await db.promise().query("SELECT * FROM Users");
             return [rows];
        }
    }
    return user_repository;
}
