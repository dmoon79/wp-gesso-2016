module.exports = function(grunt) {

  grunt.config.merge({
    watch : {
      gesso: {
        files : [ '<%= pkg.themePath %>/sass/**/*.scss' ],
        tasks : [ 'buildStyles' ],
        options : {
          livereload : true
        }
      },
      patternlab : {
        files : [ '<%= pkg.themePath %>/pattern-lab/source/**/*' ],
        tasks : [ 'shell:patternlab' ],
        options : {
          livereload : true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');
}
