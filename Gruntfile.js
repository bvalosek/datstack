module.exports = function(grunt) {

  // All third party plugins
  require('load-grunt-tasks')(grunt);

  // Our plugins
  require('./tasks/datstack.js')(grunt);

  grunt.initConfig({
    datstack: {
      client: { src: './app/client' }
    }
  });

  grunt.registerTask('default', [
    'datstack'
  ]);
};
