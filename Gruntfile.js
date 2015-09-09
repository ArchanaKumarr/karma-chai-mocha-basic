module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js',
                'js/*.js',
            ]
        },
        karma: {
          unit: {
            configFile: 'karma.conf.js',
            options: {
            }
          }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};


