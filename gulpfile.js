var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

gulp.task('imagemin', function() {
   var imgSrc = 'images/*/*.+(png|jpg|gif)',
   imgDst = 'build/images';
   
   gulp.src(imgSrc)
   .pipe(changed(imgDst))
   .pipe(imagemin())
   .pipe(gulp.dest(imgDst));
});

gulp.task('default',['imagemin'],function(){
});

gulp.task('js', function(){
   gulp.src('assets/js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('build/scripts/'));
});

gulp.task('css', function(){
   gulp.src('assets/css/*.css')
   .pipe(minify())
   .pipe(gulp.dest('build/styles/'));
});

gulp.task('default',['js','css'],function(){
});