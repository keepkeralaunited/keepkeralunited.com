var pug = require('pug')
const path = require('path')

const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].html',
	},
}

const PugLoader = {
	loader: 'html-loader',
	options: {
		attributes: {
			root: '.',
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
		preprocessor: (content, loaderContext) => {
			return pug.render(content, {
				basedir: path.resolve(__dirname, '../../src/'),
			})
		},
	},
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.pug$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', PugLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.pug$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', PugLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
