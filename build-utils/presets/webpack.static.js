const fileLoader = {
	loader: 'file-loader',
	options: {
		name: '[name].[ext]',
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
