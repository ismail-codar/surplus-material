var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/");
var compiler = webpack(webpackConfig);

//TODO HMR çalışmıyor...
var server = new WebpackDevServer(compiler);
server.listen(3020);