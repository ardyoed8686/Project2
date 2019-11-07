var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();
var routes = require('./routes/routes');

app.use('/', routes);



app.listen(PORT, function(){

    console.log('listening on port ' + PORT);
});
