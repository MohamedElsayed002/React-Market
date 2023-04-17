

import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import sass from 'sass'


let sassGulp = gulpSass(sass)

gulp.task('sass' , async function () {
    gulp.src('./src/components/**/*.scss').pipe(sassGulp()).pipe(gulp.dest('./src/css'))
})