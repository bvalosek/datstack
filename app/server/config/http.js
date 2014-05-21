var path = require('path');

module.exports = {

  // Add logic here to handle PaaS deployments or other proxying solutions to
  // the server starts up listening in the correct place
  port :
    process.env.PORT ||
    process.env.OPENSHIFT_NODEJS_PORT ||
    8123,
  ipAddress :
    process.env.OPENSHIFT_NODEJS_IP ||
    undefined,

  // Static file serving directory
  webroot :
    path.resolve(path.join(__dirname, '../../../dist/client'))

};
