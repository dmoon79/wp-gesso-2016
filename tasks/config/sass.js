module.exports = function(grunt) {

  grunt.config.merge({
    sass: {
      gesso: {
        files : [{
          expand : true,
          cwd : '<%= pkg.themePath %>/sass/',
          src : [ '**/*.scss' ],
          dest : '<%= pkg.themePath %>/css',
          ext : '.css'
        }],
        options : {
          sourceMap : true,
          line_comments: true,
          outputStyle : 'nested',
          includePaths : [ './bower_components' ],
          quiet : true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
}
