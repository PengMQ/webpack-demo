const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry: {
		index: './src/index.js',
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html'
		})
	]
}