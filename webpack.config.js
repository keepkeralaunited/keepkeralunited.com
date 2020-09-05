const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
	target: 'node',
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].[ext]',
						},
					},
					{
						loader: 'extract-loader',
						options: {
							publicPath: '../',
						},
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
					},
				],
			},
			{
				test: /\.html$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
					'extract-loader',
					{
						loader: 'html-loader',
						options: {
							attributes: {
								list: [
									{
										tag: 'img',
										attribute: 'src',
										type: 'src',
									},
									{
										tag: 'link',
										attribute: 'href',
										type: 'src',
									},
									{
										tag: 'source',
										attribute: 'srcset',
										type: 'srcset',
									},
								],
							},
						},
					},
				],
			},
			{
				test: /(eot|svg|ttf|woff)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/fonts/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/script.js',
	},
}
