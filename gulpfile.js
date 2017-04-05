
const config = require('./gulp-config');
const glob = require('glob');
const gulp = require('gulp');
const sync = require('gulp-sync')(gulp);

glob.sync('./gulp-tasks/*.js').forEach((file) => {
  // eslint-disable-next-line import/no-dynamic-require
  require(file)(gulp, config, sync);
});
