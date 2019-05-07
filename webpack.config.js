const path = require('path');
module.exports = {
	entry: {
		index: './src/index.js',
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
	}
}