var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps")
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json')

gulp.task('default', function () {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("wwwroot/js"))
})