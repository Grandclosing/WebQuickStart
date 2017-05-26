
var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.port || 3000;

app.use('/', express.static(__dirname + "/public"));

http.listen(port, function() {
	console.log("Listening on port " + port);
});