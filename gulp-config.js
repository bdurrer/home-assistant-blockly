
module.exports = {
  paths: {
    build: {
      output: 'build'
    },
    sourceEntryFile: 'src/index.js',
    sources: ['src/**/*.js'],
    configs: ['gulp-config.js', 'gulp-tasks/**/*.js', 'gulpfile.js'],
    stylesheets: ['src/**/*.scss'],
    scripts: [
      'src/**/*.js',
      'gulpfile.js'
    ],
    html: [
      'src/**/*.html',
      'index.html'
    ],
    static: [
      './src/**/*.json',
      './src/**/*.svg',
      './src/**/*.woff',
      './src/**/*.woff2',
      './src/**/*.ttf',
      './src/**/*.png',
      './src/**/*.gif',
      './src/**/*.ico',
      './src/**/*.jpg',
      './src/**/*.eot',
      './src/**/*.css',
      './blockly/blockly_compressed.js'
    ]
  },
  serverPort: 8088,
  serverPortTest: 8089,
  // serverBackendUrl: 'http://localhost:8080',
  livereload: true,
  notifications: true
};
