module.exports = {
	devServer: {
		proxy: {
			'/programmes': {
				target: process.env.VUE_APP_API_BASE_URL,
				ws: true,
				changeOrigin: true,
			},
		},
	},
};
