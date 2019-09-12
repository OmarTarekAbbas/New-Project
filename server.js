var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var http = require('http');
var mysql = require('mysql');
var app = express();
var port = process.env.PORT || 7500;
var passport = require('passport');
var flash = require('connect-flash');

/*===================================================== passport ========================================================*/

require('./config/passport')(passport);
/*===================================================== passport ========================================================*/


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

/*===================================================== view engines ========================================================*/
app.set('view engine', 'ejs');
/*===================================================== view engines ========================================================*/


/*===================================================== justa secret ========================================================*/
app.use(session({
    secret: 'justasecret',
    resave: true,
    saveUninitialized: true
}));
/*===================================================== justa secret ========================================================*/

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*===================================================== Routes ========================================================*/
require('./app/routes.js')(app, passport);
/*===================================================== Routes ========================================================*/

/*===================================================== listen port ========================================================*/
app.listen(port);
console.log("Port: " + port);
/*===================================================== listen port ========================================================*/

/*===================================================== parser all form data ========================================================*/

/*===================================================== parser all form data ========================================================*/
app.use(bodyParser.urlencoded({extended: true}));
/*===================================================== parser all form data ========================================================*/

/*===================================================== Import all related JS and CSS files ========================================================*/
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
/*===================================================== Import all related JS and CSS files ========================================================*/








