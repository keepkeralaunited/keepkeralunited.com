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
				test: /favicon.ico/,
				exclude: /(node_modules)/,
				use: [fileLoader],
			},
		],
	},
}

const productionConfig = {
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

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
