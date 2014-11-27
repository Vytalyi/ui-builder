var express = require("express"),
	routes = require("./routes"),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    app = express();

// basic routes
routes.init(app);

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(bodyParser());
app.use(methodOverride());

// 500 handle
app.use(function(err, req, res, next) {
    res.status(500);
    res.render('500');
});

// 404 handle
app.get('*', function(req, res){
    res.status(404);
    res.render('404');
});

var server = app.listen(3000, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log('App is listening at http://%s:%s', host, port)
});
