'use strict';

const path = require('path');
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const isProd = process.argv.indexOf('-p') !== -1;

/**
 * 
 * surplus-material: ./components/index.ts,
 * app: 
 */

const webpackConfig = {
  entry: isProd
    ? {
        index: './components/index.ts'
      }
    : { app: './demo/app.ts' },
  output: {
    filename: isProd ? 'dist/[name].js' : '[name].js'
  },
  target: isProd ? 'node' : undefined,
  externals: isProd ? nodeExternals() : undefined,
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      's-js': path.resolve(path.join(__dirname, 'node_modules', 's-js')) //https://github.com/webpack/webpack/issues/2134#issuecomment-192579511
    }
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['surplus-loader', 'awesome-typescript-loader']
      }
    ]
  },
  plugins: isProd
    ? [
        new webpack.ContextReplacementPlugin(
          /moment[\\\/]locale$/,
          /^\.\/(tr)$/
        )
      ]
    : [
        new webpack.ContextReplacementPlugin(
          /moment[\\\/]locale$/,
          /^\.\/(tr)$/
        ),
        new webpack.HotModuleReplacementPlugin()
      ],
  devServer: {
    port: 3020,
    open: true,
    hot: true,
    inline: true,
    openPage: 'demo',
    historyApiFallback: {
      index: './demo/index.html'
    }
  }
};

if (isProd) {
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8889,
      reportFilename: 'report.html',
      openAnalyzer: true,
      logLevel: 'info'
    })
  );
}

module.exports = webpackConfig;
