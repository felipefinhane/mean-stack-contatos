var http = require('http');
var app = require('./config/express')();
// require('./config/database.js')('mongodb://localhost/contatooh');
require('./config/database.js')('mongodb://contatooh:123contatooh@ds129796.mlab.com:29796/heroku_hwxb31nl');


http.createServer(app)
    .listen(app.get('port'), function() {
        console.log("Express Server listening on port: " + app.get('port'));
    });
