const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname,'./src/js/index.js')
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test:/\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test:/\.scss$/,
				use: ['style-loader','css-loader','sass-loader']
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['index'],
			excludeChunks: ['node_modules']
		})
	],
	devServer: {
		open: true,
		port: 3000,
		host: 'localhost'
	}
}