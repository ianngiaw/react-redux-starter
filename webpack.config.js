configs = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
    publicPath: 'http://localhost:8080/'
  }
};

module.exports = configs;
