const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
		new HtmlWebpackPlugin({
			filename: 'html/example.html',
			template: 'index.html'
		})
	]
}