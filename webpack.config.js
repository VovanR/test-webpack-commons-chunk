const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

module.exports = {
	entry: {
		// Index page
		index: './src/index.js',
		// Auth page
		auth: './src/auth.js'
	},
	output: {
		path: './dist',
		filename: '[name].js',
		// publicPath: '/dist/'
	},
	module: {
		loaders: [
		]
	},
	devtool: 'sourcemap',
	plugins: [
		// Build vendor lib bundle
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: 2
		})
	],
	resolve: {
		extensions: ['', '.js'],
		root: [srcPath]
	}
};
