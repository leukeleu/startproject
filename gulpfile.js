'use strict';

var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var reload = browserSync.reload;
var map = require('map-stream');
var spritesmith = require('gulp.spritesmith');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 9',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.0',
  'bb >= 10'
];

gulp.task('styles', function() {
    return gulp.src('*/assets/scss/**/*.scss')
        .pipe($.sass({
            onError: function(error) {
                browserSync.notify(error);
            }
        }))
        .on('error', console.error.bind(console))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest(function(file) {
            file.path = file.path.replace('/assets/scss', '/static/css');
            return '';
        }))
        .pipe($.size({title: 'styles'}))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('sprites', function() {
    var spriteOutput = gulp.src('*/assets/sprites/**/*.png')
        .pipe(spritesmith({
            imgName:  'sprite.png',
            cssName: '_sprite.scss',
            source_image: '/static/img/',
            cssVarMap: function (sprite) {
                var path = (sprite.source_image.split('/assets/')[0]).split('/');
                sprite.name = path[path.length - 1] + '-' + sprite.name;
            },
            cssOpts: {
              cssClass: function (item) {
                var path = (sprite.source_image.split('/assets/')[0]).split('/');
                return '.' + path[path.length - 1] + '-' + item.name;
              }
            }
        }));

    spriteOutput.img.pipe(gulp.dest('project/static/img/'))
        .pipe($.size({title: 'sprite:image'}))
        .pipe(browserSync.reload({stream:true}));

    spriteOutput.css.pipe(gulp.dest('project/assets/scss/partials/'))
        .pipe($.size({title: 'sprite:scss'}));

    return spriteOutput
});

gulp.task('images', function () {
    return gulp.src('*/assets/img/**/*.*')
        .pipe($.if('*.png', imagemin({
            optimizationLevel: 5
        })))
        .pipe(gulp.dest(
            function(file) {
                file.path = file.path.replace('/assets', '/static');
                return '';
            }
        ))
        .pipe($.size({title: 'images'}))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        proxy: "http://www.startproject.nl.vm1/"
    });
    gulp.watch(['**/*.html'], reload);
});

gulp.task('javascript', function() {
    console.log('hjskjhdfhjdfsaskdj');
    return gulp.src(['*/static/js/**/*.js', '!*/static/js/lib/**/*.js'])
        .pipe(reload({stream: true, once: true}))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.size({title: 'javascript'}));
});

gulp.task('default', ['sprites', 'styles', 'images', 'javascript'])

gulp.task('dev', ['browser-sync', 'default'], function() {
    gulp.watch(['*/static/js/**/*.js', '!*/static/js/lib/**/*.js'], ['javascript']);
    gulp.watch(['*/assets/scss/**/*.scss'], ['styles']);
    gulp.watch(['*/assets/sprites/**/*.png'], ['sprites']);
    gulp.watch(['*/assets/img/**/*.*'], ['images']);
});

gulp.task('production', ['default']);
