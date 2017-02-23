/**
 * DiGiHealth
 */

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

// less
gulp.task('less', function() {
  return gulp.src('less/index.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
