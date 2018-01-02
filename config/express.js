var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var helmet = require('helmet');

module.exports = function() {
    var app = express();
    //CONFIGURACAO DE AMBIENTE
    app.set('port', process.env.PORT || 3000);
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    app.use(express.static('./public'));
    //MIDDLEWARE
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')());
    //PASSPORT
    app.use(cookieParser());
    app.use(session(
        {
            secret : 'homem passaro',
            resave : true,
            saveUninitialized : true
        }
    ));
    app.use(passport.initialize());
    app.use(passport.session());
    //HELMET
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    //app.use(helmet.hidePoweredBy({setTo : 'PHP 3.8.1'}));
    app.disable('x-powered-by');
    //AUTOLOAD models;controllers;routes - Ordem importa
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes/auth.js')
        .then('routes')
        .into(app);
    return app;
}
