var express    = require('express');
var httpConfig = require('./config/http.js');

var app = express();

// Web app endpoint
app.get('/hello', function(req, res) {
  res.end('Hello, World! From the server.');
});

// Serve static content
app.use(express.static(httpConfig.webroot));

// Start server
var ip   = httpConfig.ipAddress;
var port = httpConfig.port;
app.listen(port, ip, function(err) {
  if (err) return console.error(err);
  console.log('Listening on ' + ip + ':' + port);
});

