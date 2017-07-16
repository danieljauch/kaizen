'use strict';

const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  compass = require('gulp-compass'),
  cleanCss = require('gulp-clean-css'),
  prefix = require('gulp-autoprefixer'),
  cp = require('child_process'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  messages = {jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'};

/* Build the Jekyll Site */
gulp.task('jekyll-build', done => {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});

/* Rebuild Jekyll & do page reload */
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
  browserSync.reload();
});

/* Wait for jekyll-build, then launch the Server */
gulp.task('browser-sync', ['compass', 'jekyll-build'], () => {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/* Compile Compass/sass */
gulp.task('compass', () => {
  gulp.src('assets/scss/**/*.scss')
    .pipe(compass({
      css: 'assets/css',
      sass: 'assets/scss',
      image: 'assets/images',
      sourceMap: false,
      require: ['breakpoint','toolkit']
    }))
    .pipe(prefix({browsers: ['last 2 version', 'ie 11', 'opera 12.1', 'ios 6', 'android 4']}))
    .pipe(cleanCss())
    .pipe(plumber())
    .pipe(gulp.dest('assets/css'))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

/* JS Script Tasks */
gulp.task('scripts', () => {
  gulp.src('assets/js/dev/**.js')
  .pipe(uglify())
  .pipe(plumber())
  .pipe(gulp.dest('assets/js/prod/'))
  .pipe(gulp.dest('_site/assets/js/prod/'))
  .pipe(browserSync.reload({stream:true}));
});

/* Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', () => {
    gulp.watch('assets/scss/**', ['compass']);
    gulp.watch('assets/js/dev/**.js', ['scripts']);
    gulp.watch(['_config.yml', '_data/**', '_events/**', '_faqs/**', '_gallery/**', '_includes/**.html', '_layouts/**.html', '_lineage/**', '_posts/**', '_programs/**', '_staff/**', '_values/**', 'pages/**', 'index.html'], ['jekyll-rebuild']);
});

/* Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('deploy', ['jekyll-build', 'sass-deploy']);
