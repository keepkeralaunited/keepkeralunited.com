const fileLoader = {
	loader: 'file-loader',
	options: {
		name: '[name].[ext]',
	},
}

const htmlLoader = {
	loader: 'html-loader',
	options: {
		attributes: {
			list: [
				{
					tag: 'img',
					attribute: 'src',
					type: 'src',
				},
				{
					tag: 'link',
					attribute: 'href',
					type: 'src',
				},
				{
					tag: 'source',
					attribute: 'srcset',
					type: 'srcset',
				},
			],
		},
	},
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.html$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', htmlLoader],
			},
		],
	},
}
