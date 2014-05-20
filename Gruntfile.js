module.exports = function(grunt) {

  // All third party plugins
  require('load-grunt-tasks')(grunt);

  // Our plugins
  require('./tasks/client.js')(grunt);

  grunt.initConfig({

    client: {
      release: {
        src: './app/client'
      },
      debug: {
        src: './app/client'
      },
      options: {
        entry: 'main.js',
        output: './dist',
        webroot: './public'
      }
    }

  });

  grunt.registerTask('default', ['client']);
};
