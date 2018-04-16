var gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    minifyHtml = require('gulp-minify-html'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev')


gulp.task('less', function() {
    gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./static/scss'))
        .pipe(connect.reload())

})

gulp.task('Lib', function() {
    gulp.src('./src/js/lib/*.js')
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('./dist/lib'))
})

gulp.task('moveLib', function() {
    gulp.src('./src/js/lib/lib.js')
        .pipe(gulp.dest('./dist/lib'))
})


// gulp.task('Html', function() {
//     gulp.src('./src/*.html')
//         .pipe(usemin({
//             js: [uglify, rev],
//             css: [minifyCss, rev],
//             html: [Html]
//         }))
//         .pipe(gulp.dest('./dist/'))
// })

gulp.task('server', function() {
    connect.server({
        root: 'src',
        port: 8080,
        livereload: true
    })
})

gulp.task('watch', function() {
    gulp.watch(['./src/js/*.js', './src*.html'], function() {
        gulp.src('./src/*.html')
            .pipe(connect.reload())
    })
    gulp.watch(['./src/less/*.less', './src/less/**/*.less'], ['less'])
})

gulp.task('default', ['less', 'server'], function() {
    console.log('执行了')
})