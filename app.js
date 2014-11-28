﻿var express = require('express'),
	routes = require('./routes'),
	http = require('http'),
	path = require('path'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('cookie-session'),
    errorhandler = require('errorhandler');


var app = express();
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
    keys: ['key1', 'key2']
}));
app.use(express.static(path.join(__dirname, 'public')));


routes.init(app);


http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});


if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}
