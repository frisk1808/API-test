const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "180808",
    database: "db_test",
    multipleStatements: true,
});

mysqlConexion.connect(
(err) => {
    if(!err){
        console.log("Estoy conectado a la base de datos MySQL");
    }
    else{
        console.log("No estoy conectado. Error", err);
    }
}
);

module.exports = mysqlConexion;