function getPublicPath() {
	if (process.env.CONTEXT == 'production') {
		return `${process.env.URL}/`
	}

	if (process.env.CONTEXT == 'branch-deploy') {
		return 'https://develop.keepkeralaunited.com/'
	}

	return `${process.env.DEPLOY_PRIME_URL}/`
}

module.exports = {
	output: {
		publicPath: getPublicPath(),
	},
}
