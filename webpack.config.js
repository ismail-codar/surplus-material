'use strict';

const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.argv.indexOf('-p') !== -1;

const webpackConfig = {
	entry: isProd ? './components/index.ts' : './demo/app.ts',
	output: {
		filename: isProd ? './dist/surplus-material.js' : 'app.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			's-js': path.resolve(path.join(__dirname, 'node_modules', 's-js')) //https://github.com/webpack/webpack/issues/2134#issuecomment-192579511
		}
	},
	devtool: "sourcemap",
	resolveLoader: {
		alias: {
			dottedidentifierremover: require.resolve("./webpack-custom-util/dotted-identifier-remover.js")
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/, use: [
					'surplus-loader',
					'dottedidentifierremover', 
					'awesome-typescript-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		port: 3020,
		open: true,
		hot: true,
		inline: true,
		openPage: 'demo',
		historyApiFallback: {
			index: "./demo/index.html"
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
	)
}

module.exports = webpackConfig