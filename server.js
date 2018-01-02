var http = require('http');
var app = require('./config/express.js')();
require('./config/passport.js')();
require('./config/database.js')('mongodb://172.17.0.2/contatooh');
//MongoDB Heroku
//require('./config/database.js')('mongodb://contatooh:123contatooh@ds129796.mlab.com:29796/heroku_hwxb31nl');
http.createServer(app)
    .listen(app.get('port'), function() {
        console.log("Express Server listening on port: " + app.get('port'));
    });
