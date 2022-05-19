<script>
export default {
	globalData: {
		pageName: 'index',
		phoneHeight:""
	},

	onLaunch: function() {
		this.getPhoneHeight();
	},
	onShow: function() {
	},
	onHide: function() {
	},
	methods: {
		onPageNotFound() {
			uni.navigateTo({
				url: '/pages/404/404'
			});
		},
		getPhoneHeight() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					that.globalData.phoneHeight = res.statusBarHeight;
				}
			});
		}
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
</style>
