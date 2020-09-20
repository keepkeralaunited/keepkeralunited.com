var pug = require('pug')
const path = require('path')

const fileLoader = {
	loader: 'file-loader',
	options: {
		context: 'src',
		name: '[path][name].html',
	},
}

// const PostPartial = require('../../src/blog/handlebars/partials/Post.hbs')

// Handlebars.registerPartial('Post', PostPartial)

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
			return pug.render(content, {
				name: 'Akash Mohan',
				basedir: path.resolve(__dirname, '../../src/blog/includes'),
			})
		},
	},
}

module.exports = {
	module: {
		rules: [
			{
				test: /\.pug$/i,
				exclude: /node_modules/,
				use: [fileLoader, 'extract-loader', HandleBarsHtmlLoader],
			},
		],
	},
}
