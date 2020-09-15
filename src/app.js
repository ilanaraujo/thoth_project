// EXPRESS
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');



// Vamos concentrar as coisas relacionadas ao login num bloco só por enquanto

const passport = require('passport');
const MongoStore = require('connect-mongo')(session);


const mongo = require('mongodb').MongoClient
// const dbUrl = 'mongodb://root:MongoDB2019!@192.168.99.100:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false'


const app = express();

// SESSION (TODO: A lot of duplicated code)
const dbUrl = process.env.MONGO_CONNECTION_STR || 'mongodb://localhost/ufrj'


mongo.connect(dbUrl, function (err, client) {
    if (err) return console.log(err)
    db = client.db('ufrj').collection("covid19_test1")
    dblogin = client.db('ufrj').collection("login");

    // AUTHENTICATION
    
})



// TEMPLATES
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


// STATIC FILES
const static_path = path.join(__dirname, "../assets")
console.log('Static files from', static_path)
app.use("/assets", express.static(static_path) )


// DATABASE MIDDLEWARE
const connectDB = require('./database/database').connectDB

// CALL ROUTERS FUNCTION
const index = require('./routes/index');
const APIRoute = require('./routes/APIRoute');





app.use('/', index);
app.use('/api', connectDB, APIRoute); //TODO:Implementar autenticação de api via token?



module.exports = app;
