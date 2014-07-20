var gulp = require('gulp');
var gulpif = require('gulp-if');

// Include Our Plugins
var jshint = require('gulp-jshint');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
connect = require('gulp-connect');
lr = require('tiny-lr');


// Compile Less
gulp.task('less', function() {
    return gulp.src('src/styles/styles.less')
        .pipe(less())
        .pipe(gulp.dest('app/styles'));
});

//Concat & Minify CSS
gulp.task('styles', function(){
    gulp.src('app/styles/styles.css')
        .pipe(concat('styles.css'))
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('app/styles'))
});

//Compile Coffee
gulp.task('coffee', function() {
    return gulp.src('src/scripts/*')
        .pipe(gulpif(/[.]coffee$/,coffee()))
        .pipe(gulp.dest('app/scripts'));
});

// Concatenate & Uglify JS
gulp.task('scripts', function() {
    return gulp.src('src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('app/scripts'));
});


// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/styles/*.less', ['less']);
});

gulp.task('connect', function(){
    connect.server({
        root: ['app'],
        port: 4000,
        liverreload: true
    });
});

gulp.task('run', ['connect', 'watch']);

// Default Task
gulp.task('default', ['less', 'run']);