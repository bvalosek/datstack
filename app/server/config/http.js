var path = require('path');

module.exports = {

  // Add logic here to handle PaaS deployments or other proxying solutions
  port      : 8123,
  ipAddress : '127.0.0.1',

  webroot   : path.resolve('./dist/debug')

};
