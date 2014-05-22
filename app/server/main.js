var express = require('express');
var path    = require('path');

var PORT     = process.env.PORT || 8123;
var WEB_ROOT = path.resolve(path.join(__dirname, '../../dist/client'));

var app = express();

// Web app endpoint
app.get('/hello', function(req, res) {
  res.end('Hello, World! From the server.');
});

// Serve static content
app.use(express.static(WEB_ROOT));

// Start server
app.listen(PORT, function(err) {
  if (err)
    return console.error(err);
  console.log('HTTP server listening on ' + PORT);
  console.log('Web root being served from ' + WEB_ROOT);
});

