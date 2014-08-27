'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify'),
    uglifyify = require('uglifyify'),
    del = require('del'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify('./scripts/app.jsx', watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(reload({stream: true, once: true}));
  }

  bundler.transform(reactify);
  bundler.transform(uglifyify);
  bundler.on('update', rebundle);
  return rebundle();
});

gulp.task('styles', function() {
  return gulp.src('styles/main.scss')
    .pipe(changed('dist/css'))
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass'}))
    .pipe(autoprefixer('last 1 version'))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('watchTask', function() {
  gulp.watch('styles/main.scss', ['styles']);
});

gulp.task('main', ['browserSync', 'watchTask', 'watchify', 'styles']);

gulp.task('watch', ['clean'], function() {
  gulp.start('main');
});

gulp.task('default', ['clean'], function() {
  console.log('Run "gulp watch"');
});
