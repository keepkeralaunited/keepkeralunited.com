const babelLoader = {
	loader: 'babel-loader',
	options: {
		presets: ['@babel/preset-env'],
	},
}

module.exports = {
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
