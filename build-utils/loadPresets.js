const { merge } = require('webpack-merge')

module.exports = function loadPresets(presets, mode) {
	const mergedPresets = [].concat(...[presets])
	const mergedConfigs = mergedPresets.map((presetName) =>
		require(`./presets/webpack.${presetName}.js`)(mode)
	)

	return merge({}, ...mergedConfigs)
}
