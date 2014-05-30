/* jshint node:true */
var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    connect = require('gulp-connect'),
    stylus = require('gulp-stylus'),
    ghpages = require('gulp-gh-pages'),
    concat = require('gulp-concat');

var gitRemoteUrl = 'https://github.com/dotch/brick-boilerplate';

var paths = {
  'main': 'src/element.html',
  'scripts': 'src/*.js',
  'stylesheets': 'src/*.styl',
  'src': 'src/*',
  'index': 'index.html',
  'bowerComponents': 'bower_components/**/*'
};

gulp.task('lint', function() {
  gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('styles', function() {
  gulp.src(paths.stylesheets)
    .pipe(stylus())
    .pipe(concat('element.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('gh-pages', function () {
  gulp.src([
    paths.index,
    paths.src,
    paths.bowerComponents
  ],{base:'./'})
    .pipe(ghpages());
});

gulp.task('connect', function() {
  connect.server();
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['lint']);
  gulp.watch(paths.stylesheets, ['styles']);
});

gulp.task('build', ['lint','styles']);
gulp.task('server', ['lint','styles','connect','watch']);
gulp.task('deploy', ['gh-pages']);

