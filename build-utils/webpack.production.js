function getPublicPath() {
	if (process.env.CONTEXT == 'production') {
		return `${process.env.URL}/`
	}

	return `${process.env.DEPLOY_PRIME_URL}/`
}

module.exports = {
	output: {
		publicPath: getPublicPath(),
	},
}
