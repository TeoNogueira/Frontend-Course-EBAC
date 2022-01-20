const gulp = require('gulp');


const gulpConcat = require('gulp-concat');
const cssMin = require('gulp-cssmin');
const rename = require('gulp-rename');
// 
const uglify = require('gulp-uglify');
// 
const image = require('gulp-image');

// import image from 'gulp-image'
const webp = require('gulp-webp');

function tarefasCSS(cb) {

    return gulp.src('./vendor/**/*.css')
    .pipe(gulpConcat('libs.css'))
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'})) // libs.min.css
    .pipe(gulp.dest('./dist/css'))

}

function tarefasJS() {

return gulp.src('./vendor/**/*.js')
.pipe(gulpConcat('libs.js'))
.pipe(uglify())
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('./dist/js'))


}

function tarefasIMG() {


    gulp.src('./src/img/*')
    .pipe(image({
    
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet:  true 
    
    }))
    .pipe(webp())
    .pipe(gulp.dest('./dist/images'))
       


}



exports.styles = tarefasCSS()

exports.scripts = tarefasJS()

exports.images = tarefasIMG()