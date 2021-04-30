const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: path.resolve(__dirname,'./js/index.js')
	},
	output: {
		path: path.resolve(__dirname,'./dist'),
		filename: 'js/[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
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