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
				test: /(eot|svg|ttf|woff)$/i,
				use: [fileLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /(eot|svg|ttf|woff)$/i,
				use: [fileLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
