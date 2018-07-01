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
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['watch'])
}
