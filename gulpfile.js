const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var imageResize = require('gulp-image-resize');
 
gulp.task('imagemin', () =>
    gulp.src('views/images/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('views/images'))
);

gulp.task('imageresize', () => 
  gulp.src('views/images/*.jpg')
    .pipe(imageResize({
      width : 360,
      height : 270,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('views/images'))
);