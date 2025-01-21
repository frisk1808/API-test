const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const mysqlConexion = require("./conexion");
const productos = require("./routes/tabla_productos");

var app = express();
app.use(bodyParser.json());
app.use("/productos", productos);
app.listen(3000);