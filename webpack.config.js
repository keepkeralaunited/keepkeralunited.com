const path = require('path')

const { merge } = require('webpack-merge')

const loadPresets = require('./build-utils/loadPresets.js')
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}.js`)

module.exports = ({ mode, presets } = { mode: 'production', preset: [] }) => {
	const config = merge(
		{
			mode,
			target: 'node',
			entry: {
				script: './src/index.js',
				intersectionObserverPolyFill: './src/img.js',
			},
			output: {
				path: path.resolve(__dirname, './dist'),
				filename: 'js/[name].js',
			},
		},
		modeConfig(mode),
		loadPresets(presets)
	)

	return config
}
