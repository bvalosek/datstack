module.exports = addClientTask;

var path  = require('path');
var grunt = require('grunt');

var TASK_NAME = 'datstack';

/**
 * A Grunt task to build the entirety of the client-side application.
 * @param {grunt} grunt
 */
function addClientTask(grunt)
{
  grunt.registerMultiTask(TASK_NAME, 'Build the client app', function() {

    var target = this.target;
    var tag = TASK_NAME + '_' + target;

    function runTaskWith(task, config)
    {
      grunt.config(task + '.' + tag, config || {});
      grunt.task.run([task + ':' + tag]);
    }

    var options = this.options({
      baseStyle : './style/style.less',
      debug     : false,
      entry     : 'main.js',
      output    : './dist',
      webroot   : './public'
    });

    var webrootDir = path.resolve(options.webroot);
    var destDir = path.resolve(path.join(options.output, target));

    this.files.forEach(function(f) {

      if (f.src.length > 1)
        grunt.warn('Must specify a single output path');
      var srcDir = path.resolve(f.src[0]);

      runTaskWith('jshint', [path.join(srcDir, '**/*.js')]);

      runTaskWith('clean', { src: [destDir] });

      runTaskWith('copy', {
        expand: true,
        cwd: webrootDir,
        src: '**',
        dest: destDir
      });

      runTaskWith('browserify', {
        src: [path.join(srcDir, options.entry)],
        dest: path.join(destDir, 'main.js'),
        options: { debug: options.debug }
      });

      runTaskWith('less', {
        dest: path.join(destDir, 'style.css'),
        src: options.baseStyle,
        options: {
          paths: [path.join(webrootDir, 'bower_components')]
        }
      });

    });
  });
}
