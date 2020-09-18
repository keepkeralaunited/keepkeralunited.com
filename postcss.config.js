const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
	plugins: [
		// purgecss({
		// 	content: [
		// 		'src/index.html',
		// 		'src/blog/index.html',
		// 		'**/*.html',
		// 		'**/*.hbs',
		// 	],
		// 	whitelist: ['is-active'],
		// }),
	],
}
