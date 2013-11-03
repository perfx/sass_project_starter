module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        // Metadata
        meta   : {
            basePath  : '',
            sassPath  : 'sass/',
            fontsPath : 'fonts/',
            cssPath   : 'css/',
            jsPath    : 'js/',
            imagesPath: 'images/',
            htmlPath  : 'html/',
            incPath   : 'html/chunks/',
            distPath  : 'app/'
        },

        // Task configuration
        compass: {
            dev: {
                options: {
                    httpGeneratedImagesPath: '../<%= meta.imagesPath %>',
                    cssDir                 : '<%= meta.cssPath %>',
                    outputStyle            : 'expanded',
                    debugInfo              : true
                },
                files  : {
                    '<%= meta.cssPath %>styles.css': '<%= meta.sassPath %>styles.scss'
                }
            },
            dist: {
                options: {
                    httpGeneratedImagesPath: '../<%= meta.imagesPath %>',
                    cssDir                 : '<%= meta.cssPath %>',
                    outputStyle            : 'compressed',
                    debugInfo              : false,
                    force                  : true
                },
                files  : {
                    '<%= meta.cssPath %>styles.css': '<%= meta.sassPath %>styles.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 2 version', '> 1%', 'ie 8']
                },
                files: {
                    '<%= meta.distPath %><%= meta.cssPath %>styles.css': '<%= meta.cssPath %>styles.css'
                }
            }
        },

        cssmin: {
            dist: {
                files: {
                    '<%= meta.distPath %><%= meta.cssPath %>styles.css': '<%= meta.distPath %><%= meta.cssPath %>styles.css'
                }
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files  : [
                    {
                        expand: true,
                        src   : '<%= meta.imagesPath %>{,*/}*',
                        dest  : '<%= meta.distPath %>'
                    }
                ]
            }
        },

        includereplace: {
            dist: {
                options: {
                    globals: {
                        projectTitle: 'sass_project_starter'
                    }
                },
                files: {
                    '<%= meta.distPath %>': '<%= meta.htmlPath %>**/*.html'
                }
            }
        },

        copy: {
            css: {
                files: {
                    '<%= meta.cssPath %>styles.css': '<%= meta.distPath %><%= meta.cssPath %>styles.css'
                }
            },
            images: {
                files: {
                    '<%= meta.distPath %>': '<%= meta.imagesPath %>**/*'
                }
            },
            js: {
                files: {
                    '<%= meta.jsPath %>app.min.js': '<%= meta.distPath %>'
                }
            },
            fonts: {
                files: {
                    '<%= meta.distPath %>': '<%= meta.fontsPath %>*'
                }
            }
        },

        rm: {
            images: {
                dir: '<%= meta.distPath %><%= meta.imagesPath %>'
            },
            html: {
                dir: '<%= meta.distPath %><%= meta.htmlPath %>'
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= meta.distPath %><%= meta.jsPath %>app.min.js': [
                        '<%= meta.jsPath %>libs/**/*.js',
                        '<%= meta.jsPath %>plugins/**/*.js',
                        '<%= meta.jsPath %>modules/**/*.js',
                        '<%= meta.jsPath %>app.js'
                    ]
                }
            }
        },

        notify: {
            build: {
                options: {
                    message: 'Build complete...'
                }
            }
        },

        // Watcher
        watch : {
            scss          : {
                files: [
                    '<%= meta.sassPath %>**/*.scss'
                ],
                tasks: ['compass:dev', 'autoprefixer', 'copy:css']
            },
            includereplace: {
                files: [
                    '<%= meta.htmlPath %>**/*.html',
                    '<%= meta.incPath %>**/*.html'
                ],
                tasks: ['rm:html', 'includereplace']
            },
            images        : {
                files: [
                    '<%= meta.imagesPath %>**/*'
                ],
                tasks: ['rm:images', 'copy:images']
            },
            fonts         : {
                files: [
                    '<%= meta.fontsPath %>*'
                ],
                tasks: ['copy:fonts']
            },
            uglify        : {
                files: [
                    '<%= meta.jsPath %>libs/**/*.js',
                    '<%= meta.jsPath %>plugins/**/*.js',
                    '<%= meta.jsPath %>modules/**/*.js',
                    '<%= meta.jsPath %>app.js'
                ],
                tasks: ['uglify', 'copy:js']
            }
        }

    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-rm');
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['compass:dist', 'autoprefixer', 'cssmin', 'copy', 'notify:build']);
    grunt.registerTask('init', ['uglify','compass:dist', 'autoprefixer', 'cssmin','includereplace', 'copy', 'notify:build']);
};