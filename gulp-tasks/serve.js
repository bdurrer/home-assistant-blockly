
const connect = require('gulp-connect');
// const proxy = require('http-proxy-middleware');

module.exports = (gulp, config) => {
  gulp.task('serve', ['build'], () => {
    connect.server({
      port: config.serverPort,
      livereload: config.livereload,
      root: ['.']
      /* middleware: () => [
        proxy('/api', {
          target: config.serverBackendUrl,
          changeOrigin: true
        })
      ] */
    });
  });
};
