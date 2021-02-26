const controllers = require("../controllers");

module.exports= (db) => {
    const user_repository = {
        getAllUsers:() => {
            db.promise().query("SELECT * FROM Users")
            .then( ([rows,fields]) => {
                console.log(rows)
                rows;
            })
            .catch(console.log)
            .then( () => db.end());
        }
    }
    return user_repository;
}