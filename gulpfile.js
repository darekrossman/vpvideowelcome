var gulp = require('gulp');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var es6ify = require('es6ify');
var reactify = require('reactify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');

browserSync({
  proxy: 'localhost:3333/playground',
  files: ['**/js/bundle.js', '**/*.css', '**/*.html'],
  open: false
})

var bundler = watchify(browserify(watchify.args));
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.add('./js/app.js');
bundler.transform('reactify');
bundler.transform('es6ify');

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    // optional, remove if you dont want sourcemaps
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    .pipe(sourcemaps.write()) // writes .map file
    //
    .pipe(gulp.dest('./js'));
}

gulp.task('watch', bundle); // so you can run `gulp js` to build the file

