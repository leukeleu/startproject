var gulp = require('gulp')
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');
var map = require('map-stream');
var server = livereload();

var paths = {
  styles: {
        src:  './project/styles/**/*.scss',
        dest: './static/project/styles/'
  }
};

gulp.task('styles', function() {
    return gulp.src(paths.styles.src)
    .pipe(compass({
        config_file: './config.rb',
        css: './static/project/styles',
        sass: './project/styles'
    })).on('error', function(err) {
        console.log(err);
    })
    .pipe(gulp.dest(paths.styles.dest))
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
