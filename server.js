var express = require('express');
var app = express();
// Define the port to run on
var PORT = process.env.PORT || 3000;
app.set('port', PORT);
app.use(express.static(__dirname + '/www'));
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});