/* jshint node:true */
var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat');

var paths = {
  'main': 'src/element.html',
  'scripts': 'src/*.js',
  'stylesheets': 'src/*.styl',
  'gulpfile': 'gulpfile.js'
};

gulp.task('lint', function() {
  return gulp.src([paths.scripts, paths.gulpfile])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('styles', function() {
  gulp.src('src/*.styl')
    .pipe(stylus())
    .pipe(concat('element.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function () {
  gulp.watch([paths.scripts, paths.gulpfile], ['lint']);
  gulp.watch(paths.stylesheets, ['styles']);
});

gulp.task('build', ['lint','styles']);
gulp.task('server', ['lint','styles','connect','watch']);

