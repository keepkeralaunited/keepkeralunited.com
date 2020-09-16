const fileLoader = {
	loader: 'file-loader',
	options: {
		name: 'css/[name].[ext]',
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

module.exports = {
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
