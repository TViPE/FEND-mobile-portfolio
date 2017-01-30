const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
//gulp.task('default', function () { console.log('Hello Gulp!') });
 
gulp.task('default', () =>
    return gulp.src('/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('/views/images/'))
);
