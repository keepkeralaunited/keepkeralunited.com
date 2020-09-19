const { merge } = require('webpack-merge')

module.exports = function loadPresets(presets) {
	const mergedPresets = [].concat(...[presets])
	const mergedConfigs = mergedPresets.map((presetName) =>
		require(`./presets/webpack.${presetName}.js`)
	)

	return merge({}, ...mergedConfigs)
}
