module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            webpp: {
                files: {
                    'dist/basic.js': ['./main.js','./drag.js','./range.js','./scale.js'],

                },
            },
        },
        uglify: {
            webpp: {
                files: {
                    'dest/basic.js': ['dist/main.js']

                },
            },
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify');;

    // 默认被执行的任务列表。
    grunt.registerTask('default',['concat','uglify']);

};