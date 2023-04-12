const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importing routes
const misRutas = require("./routers/index");

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs"); 
app.set('views', path.join(__dirname, 'views'));

//static files
app.use(express.static (path.join(__dirname, 'public')));

//middlewares
// app.use(morgan('dev'));
// app.use(myConnection(mysql, {
//     host: "localhost",
//     user: "root",
//     password : "",
//     /*port: "3306",*/
//     database: "projectd"
// }, 'single'));

//routers
app.use('/', misRutas);

//starting the server
app.listen(app.get('port'), () => {    
    console.log(`Iniciando servidor en puerto 3000`);
});