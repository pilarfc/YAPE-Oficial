/* Dependencias */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
var sass = require('gulp-sass');


gulp.task('demoJS', function () {
  gulp.src('./src/assets/js/*.js') 
  .pipe(obfuscate())
  .pipe(uglify())
  .pipe(gulp.dest('./public/assets/js'))
});

gulp.task('demoCSS', function () {
    gulp.src('./src/assets/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'})
    .on ('error', sass.logError))
    .pipe(gulp.dest('./public/assets/css'))
});


gulp.task('demoHTML', function () {
    gulp.src('./src/*.html')
    .pipe(gulp.dest('./public'))
});

