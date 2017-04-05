
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const rollup = require('gulp-rollup');

module.exports = (gulp, config) => {
  gulp.task('compile-source', () =>
    gulp.src(config.paths.sources)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(rollup({
        entry: config.paths.sourceEntryFile
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.paths.build.output))
  );
};
