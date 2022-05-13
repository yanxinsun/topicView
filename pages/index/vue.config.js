module.exports = {
	devServer: {
		port: '8080',
		disableHostCheck: true,
		proxy: {
			'/dpc': {
				target: 'http://XXXXX:9088',
				changeOrigin: true,
				pathRewrite: {
					'^/dpc': ''
				}
			}
		}
	}
}
