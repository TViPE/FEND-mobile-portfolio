const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
 
gulp.task('imagemin', () =>
    gulp.src('views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('views/images'))
);

gulp.task('imageresize', () => 
  gulp.src('views/images/*')
    .pipe(imageResize({
      width : 100,
      height : 100,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('views/images'))
);