const path = require('path');
var context = path.resolve(__dirname);
console.log(context);
module.exports = {
	context: context,
	entry: {
		index: './src/index.js',
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
	}
}