let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = 
{ 
	entry: './src/ts/TypeScriptExample.ts',
	devtool: 'source-map',

	output: 
	{
		path: path.resolve(__dirname, 'www'),
		filename: 'TypeScriptExample.js'
    },

	resolve: 
	{
		extensions: ['.ts', '.tsx', '.js']
	},

	module: 
	{
		loaders: 
		[
			{
				test: /\.tsx?$/, 
				loader: 'awesome-typescript-loader'
			}
		]
	},

	plugins: 
	[
		new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}),
		new CopyWebpackPlugin([{from:'./src/index.html'}])
	],

};
