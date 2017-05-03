var nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: './handler.js',
	target: 'node',
	externals: [nodeExternals()],
	output: {
		libraryTarget: 'commonjs',
		path: '.webpack',
		filename: 'handler.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		]
	}
};