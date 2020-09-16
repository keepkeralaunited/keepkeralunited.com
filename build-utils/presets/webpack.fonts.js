const fileLoader = {
	loader: 'file-loader',
	options: {
		name: 'css/fonts/[name].[ext]',
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
