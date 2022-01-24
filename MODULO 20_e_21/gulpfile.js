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

    return gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './node_modules/@fortawesome/fontawesome/fontawesome.css', './vendor/owl/owl.css', './vendor/jqueryUI/jquery-ui.min.css', './dist/css/style.css'
])
    .pipe(gulpConcat('styles.css'))
    .pipe(cssMin())
    .pipe(rename({suffix: '.min'})) // libs.min.css
    .pipe(gulp.dest('./dist/css'))

}

function tarefasJS() {

return gulp.src(['./node_modules/jquery/dist/jquery.js', './vendor/bootstrap/js/bootstrap.js', './vendor/owl/owl.js', './vendor/jqueryMask/jquery.mask.min.js', './vendor/jqueryUI/jquery-ui.min.js', './vendor/bootstrap/old/oldversion.js', './vendor/jquery/scripts.js'])
.pipe(gulpConcat('scripts.js'))
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