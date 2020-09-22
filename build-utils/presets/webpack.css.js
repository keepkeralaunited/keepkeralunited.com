const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].[ext]',
	},
}

const extractLoader = {
	loader: 'extract-loader',
	options: {
		publicPath: '../',
	},
}

const cssLoader = {
	loader: 'css-loader',
	options: {
		importLoaders: 1,
	},
}

const postCssLoader = {
	loader: 'postcss-loader',
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [fileLoader, extractLoader, cssLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [fileLoader, extractLoader, cssLoader, postCssLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
