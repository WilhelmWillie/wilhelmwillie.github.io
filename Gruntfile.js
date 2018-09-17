module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/stylesheet.css': 'scss/stylesheet.scss'
        }
      }
    },
    watch: {
      files: ['**/*.scss'],
      tasks: ['sass']
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/img'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/willie.min.js': ['js/willie.js']
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('prod', ['sass', 'imagemin', 'uglify'])
}
