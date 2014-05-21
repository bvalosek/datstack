module.exports = function(grunt) {

  // All third party plugins
  require('load-grunt-tasks')(grunt);

  // Our plugins
  require('./tasks/client.js')(grunt);

  grunt.initConfig({

    client: {
      client: {
        src: './app/client',
      }
    }

  });

  grunt.registerTask('default', [
    'client'
  ]);
};
