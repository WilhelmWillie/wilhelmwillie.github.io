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
          src: ['**/*.{png,jpg}'],
          dest: 'assets/img'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['watch'])
}
