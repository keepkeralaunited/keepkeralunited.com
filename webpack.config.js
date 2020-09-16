const path = require('path')

const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const loadPresets = require('./build-utils/loadPresets.js')
const modeConfig = (mode) => require(`./build-utils/webpack.${mode}.js`)

module.exports = ({ mode, presets } = { mode: 'production', preset: [] }) => {
	return merge(
		{
			mode,
			target: 'node',
			plugins: [
				new CleanWebpackPlugin(),
				new MiniCssExtractPlugin({
					filename: 'style.css',
				}),
			],
			output: {
				path: path.resolve(__dirname, './dist'),
				filename: 'js/script.js',
			},
		},
		modeConfig(mode),
		loadPresets(presets)
	)
}
