var express = require('express');
var routes = require('./routes');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 13437);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(express.cookieParser('levelCookie'));
//app.use(express.session());
app.use(app.router);

app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
}));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.use(function (err, req, res, next) {
    res.status(err.status || 404).end(err.message);
});

routes.generate(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});