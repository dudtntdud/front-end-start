var gulp = require('gulp');

gulp.task('www', function() {
  console.log("11");
});

//이런식으로 태스크를 나눠서 gulp www 를 실행하면 11를 콘솔에다 찍음

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');

//js 프로젝트 소스파일
var jsfiles = ['src/js/config.js', 'src/js/pages/**/*.js', 'src/js/main.js'];

gulp.task('concat:js', function() {
  return gulp.src(jsfiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/'));
}); //js파일을 하나로 합쳐서 app.js 파일로 뱉어냄 jsfiles에서 가장먼저 config.js부터 물고 그다음 다 마지막으로 main

gulp.task('copy:html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('minify:js', function() {
  return gulp.src('dist/app.js')    // dist/app.js를 바라봄
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify:css', function() {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});


gulp.task('copy', ['copy:html', 'copy:lib']);     //copy하면 :html과 :lib를 실행시켜줌
gulp.task('build', ['concat:js', 'copy', 'minify:css']);
gulp.task('default', ['build', 'watch']);         //그냥 gulp만 치면 bulit와 watch를 함
