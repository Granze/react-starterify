'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    autoprefixer = require('autoprefixer-core'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('gulp-eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    nested = require('postcss-nested'),
    vars = require('postcss-simple-vars'),
    extend = require('postcss-simple-extend'),
    cssnano = require('cssnano'),
    htmlReplace = require('gulp-html-replace'),
    image = require('gulp-image'),
    runSequence = require('run-sequence'),
    reload = browserSync.reload,
    p = {
      bundle: 'app.js',
      srcJsx: 'src/app.jsx',
      srcCss: 'src/**/*.css',
      dist: 'dist',
      distJs: 'dist/js',
      distcss: 'dist/css',
      distImg: 'dist/img'
    };

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(p.srcJsx, watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(gulp.dest(p.distJs))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  browserify(p.srcJsx)
    .transform(babelify)
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(p.distJs));
});

gulp.task('styles', function() {
  return gulp.src(p.srcCss)
    .pipe(sourcemaps.init())
    .pipe(postcss([vars, extend, nested, autoprefixer, cssnano]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(p.dist))
    .pipe(reload({stream: true}));
});

gulp.task('htmlReplace', function () {
  var replacements = {
    css: 'styles/main.css',
    js: 'js/app.js'
  };

  return gulp.src('index.html')
    .pipe(htmlReplace(replacements))
    .pipe(gulp.dest(p.dist));
});

gulp.task('image', function () {
  return gulp.src('img/**')
    .pipe(image())
    .pipe(gulp.dest(p.distImg));
});

gulp.task('lint', function() {
  return gulp.src(p.srcJsx)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('watchTask', function() {
  gulp.watch(p.scss, ['styles']);
  gulp.watch(p.srcJsx, ['lint']);
});

gulp.task('watch', function(cb) {
  runSequence('clean', ['browserSync', 'watchTask', 'watchify', 'styles', 'lint', 'image'], cb);
});

gulp.task('build', function(cb) {
  process.env.NODE_ENV = 'production';
  runSequence('clean', ['browserify', 'styles', 'htmlReplace', 'image'], cb);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
