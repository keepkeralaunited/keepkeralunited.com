const Handlebars = require('handlebars')

const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].html',
	},
}

const PostPartial = require('../../src/blog/handlebars/partials/Post.hbs')

Handlebars.registerPartial('Post', PostPartial)

const HandleBarsHtmlLoader = {
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
			return Handlebars.compile(content)({
				firstName: 'Akash K',
				lastName: 'Mohan',
			})
		},
	},
}

const developerConfig = {
	module: {
		rules: [
			{
				test: /\.hbs$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', HandleBarsHtmlLoader],
			},
		],
	},
}

const productionConfig = {
	module: {
		rules: [
			{
				test: /\.hbs$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', HandleBarsHtmlLoader],
			},
		],
	},
}

module.exports = function getConfig(mode) {
	if (mode == 'development') return developerConfig
	if (mode == 'production') return productionConfig
}
