const babelLoader = {
	loader: 'babel-loader',
	options: {
		presets: ['@babel/preset-env'],
	},
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [babelLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [babelLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
