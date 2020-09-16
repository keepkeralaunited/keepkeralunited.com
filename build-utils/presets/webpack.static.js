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
				test: /favicon.ico/,
				exclude: /(node_modules)/,
				use: [fileLoader],
			},
		],
	},
}
