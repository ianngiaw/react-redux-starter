const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');
const open = require('open');

const DEFAULT_PORT = config.devServer.port;

var server = new WebpackDevServer(webpack(config), config.devServer);
server.listen(DEFAULT_PORT, "localhost", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at localhost ${DEFAULT_PORT}`);
    console.log('Opening your system browser...');
    open(`http://localhost:${DEFAULT_PORT}/webpack-dev-server/`);
  }
});
