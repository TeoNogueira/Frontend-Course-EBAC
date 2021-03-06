const {parallel, series} = require('gulp');
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
// HTML MINIFIER
const htmlmin = require('gulp-htmlmin');
// 
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload



function tarefasCSS(cb) {

     gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './node_modules/@fortawesome/fontawesome/fontawesome.css', './vendor/owl/owl.css', './vendor/jqueryUI/jquery-ui.min.css', './dist/css/style.css'
])
.pipe(cssMin())
    .pipe(rename({suffix: '.min'})) // libs.min.css
    .pipe(gulp.dest('./dist/css'))


    cb()
    
}

function tarefasJS(callback) {

     gulp.src(['./node_modules/jquery/dist/jquery.js', './vendor/bootstrap/js/bootstrap.js', './vendor/owl/owl.js', './vendor/jqueryMask/jquery.mask.min.js', './vendor/jqueryUI/jquery-ui.min.js', './vendor/bootstrap/old/oldversion.js', './vendor/jquery/scripts.js'])
     .pipe(babel({
        comments: false,
        presets: ['@babel/env']
    }))
.pipe(gulpConcat('scripts.js'))
.pipe(uglify())
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('./dist/js'))

return callback()
}

function tarefasIMG(cb) {


    return gulp.src('./src/img/*')
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



// POC - Proof of Concept

function tarefasHTML(callback)
 {

     gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
 

     return callback()
 }


gulp.task('serve', function() {

    browserSync.init({
        server: { 
            baseDir: "./dist"
        }

    });

    gulp.watch('./src/**/*').on('change', process); //repete o processo qd altera o src
    gulp.watch('./src/**/*').on('change', reload);
  
})


function end(cb){
    console.log("tarefas conclu??das")
    return cb()
}



//  EXPORTS

const process = parallel(tarefasHTML, tarefasJS, tarefasCSS, end)
exports.styles = tarefasCSS

exports.scripts = tarefasJS

exports.images = tarefasIMG




exports.default = process