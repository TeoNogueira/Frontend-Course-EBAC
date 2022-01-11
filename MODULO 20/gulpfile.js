const gulp = require('gulp');


function tarefas(cb) {

    return gulp.src('./vendor/**/*.css')
    .pipe(gulp.dest('./dist'))
}


exports.styles = tarefas()