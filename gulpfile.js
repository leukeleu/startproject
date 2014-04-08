var gulp = require('gulp')
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');
var map = require('map-stream');
var server = livereload();

gulp.task('styles', function() {
    return gulp.src('./project/styles/**/*.scss')
    .pipe(compass({
        config_file: './config.rb',
        css: './static/project/styles',
        sass: './project/styles'
    })).on('error', function(err) {
        console.log(err);
    })
    .pipe(gulp.dest('./static/project/styles/'))
    .pipe(livereload());
});

gulp.task('dev', ['styles'], function() {
    gulp.watch('./project/styles/**/*.scss', function() {
        gulp.run('styles');
    });

    gulp.watch('./project/**/*.js', function(file) {
        server.changed(file.path);
    });

    gulp.watch('./**/*.html', function(file) {
        server.changed(file.path);
    });

    gulp.watch('./**/*.py', function(file) {
        server.changed(file.path);
    });
});
