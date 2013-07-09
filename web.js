var fs = require('fs');
var express = require('express');

var infile = 'index.html';

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFile(infile, function (err, data) {
    if (err) {
       throw err;
       console.log(err);
    }
    response.send(data + " read from " + infile);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
