var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

gulp.task('default', function () {
    var src = gulp.src('./wwwroot/ts/*.ts');
    var typings = gulp.src('./typings/**/*.d.ts');
    return merge(src, typings)
        .pipe(ts('tsconfig.json'))
        .pipe(gulp.dest('./wwwroot/js'));
})