/* jshint node:true */
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var vulcanize = require('gulp-vulcanize');

var paths = {
  'main': 'src/index.html',
  'scripts': 'src/*.js',
  'styles': 'src/*.styl'
};

gulp.task('build', function() {
  gulp.src(paths.main)
      .pipe(vulcanize({
        dest: 'dist'
      }))
      .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
  gulp.watch(paths.scripts, ['lint', 'build']);
});
