var express = require('express');

var httpConfig = require('./config/http.js');
var ip      = httpConfig.ipAddress;
var port    = httpConfig.port;
var webroot = httpConfig.webroot;

var app = express();

app.get('/hello', function(req, res) {
  res.end('Hello, World! From the server.');
});

app.use(express.static(webroot));

app.listen(port, ip, function(err) {
  if (err)
    return console.error(err);
  console.log('Listening on ' + ip + ':' + port);
});

