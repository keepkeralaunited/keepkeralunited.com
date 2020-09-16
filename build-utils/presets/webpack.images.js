const fileLoader = {
	loader: 'file-loader',
	options: {
		name: 'img/[name].[ext]',
	},
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				use: [fileLoader],
			},
		],
	},
}
