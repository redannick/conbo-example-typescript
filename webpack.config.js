let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = 
{ 
	entry: './src/app/TypeScriptExample.ts',
	devtool: 'source-map',

	output: 
	{
		path: path.resolve(__dirname, 'dist'),
		filename: 'TypeScriptExample.js',
        publicPath: 'http://localhost:8086/'
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
				loader: 'ts-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	},

	plugins: 
	[
		new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}),
		new CopyWebpackPlugin([{from:'./src/index.html'}])
	],

	devServer: 
	{
        https: false,
        host: 'localhost',
        port: '8086',
        clientLogLevel: 'none'
	},

};
