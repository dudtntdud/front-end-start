var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');

//js 프로젝트 소스파일
var jsfiles = ['src/js/config.js', 'src/js/pages/**/*.js', 'src/js/main.js'];

gulp.task('concat:js', function() {
  return gulp.src(jsfiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:html', function() {
  return gulp.src('src/index.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('minify:js', function() {
  return gulp.src('dist/app.js')
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

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true, //파일이 수정될 때 마다 자동 새로고침 만약 내가 index.html 수정하면 실행되고있는 웹이 알아서 새로고침함
    port: 3001
  });
});


gulp.task('copy', ['copy:html', 'copy:lib']);
gulp.task('build', ['concat:js', 'copy', 'minify:css']);
gulp.task('server', ['connect'])
gulp.task('default', ['build', 'watch', 'server']);
