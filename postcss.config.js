const purgecss = require('@fullhuman/postcss-purgecss')
const purgeHtml = require('purgecss-from-html')
const purgecssFromPug = require('purgecss-from-pug')

module.exports = {
	plugins: [
		purgecss({
			content: ['./src/**/*.html', './src/**/*.pug'],
			whitelist: ['is-active', "[class^='icon-']", "[class*=' icon-']"],
			extractors: [
				{
					extractor: purgeHtml,
					extensions: ['html'],
				},
				{
					extractor: purgecssFromPug,
					extensions: ['pug'],
				},
			],
		}),
	],
}
