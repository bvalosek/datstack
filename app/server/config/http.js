var path = require('path');

module.exports = {

  // Add logic here to handle PaaS deployments or other proxying solutions
  port      : process.env.OPENSHIFT_NODEJS_PORT || 8123,
  ipAddress : process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',

  // Static file serving
  webroot   : path.resolve('./dist/debug')

};
