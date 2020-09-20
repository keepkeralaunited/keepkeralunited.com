const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].[ext]',
	},
}

module.exports = {
	module: {
		rules: [
			{
				test: /(eot|svg|ttf|woff)$/i,
				use: [fileLoader],
			},
		],
	},
}
