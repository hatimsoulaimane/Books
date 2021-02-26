
module.exports= (db) => {
    const user_repository = {
        getAllUsers: () => {
            return   db.query("select * from Users");
        }
    }
    return user_repository;
}