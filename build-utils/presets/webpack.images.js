const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].[ext]',
	},
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				use: [fileLoader, 'image-webpack-loader'],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|webp)$/i,
				use: [fileLoader, 'image-webpack-loader'],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
