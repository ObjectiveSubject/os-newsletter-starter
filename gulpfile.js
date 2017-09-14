'use strict';

var gulp = require('gulp'),
    mjml = require('gulp-mjml');

gulp.task('mjml', function() {
  gulp.src('src/index.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('src/index.mjml', ['mjml']);
});
