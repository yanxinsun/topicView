<template>
	<u-sticky class="header-box" :style="{ marginTop: phoneHeight + 'px' }">

		<view class="nav-box">
			<u--input class="header-input" placeholder="请输入搜索内容" @focus="toHistoryList()" prefixIcon="search" ></u--input>
			
		</view>
	</u-sticky>
</template>

<script>
import app from '../App.vue';
export default {
	name: 'topBar',
	data() {
		return {
			phoneHeight: 0 //这里在进行调用
		};
	},
	onLoad() {
		console.log('app', app);
	},
	props: {
		// 接受父组件的传值
		titleName: {
			type: Object
		}
	},
	methods: {
		backpage() {
			uni.navigateBack({
				delta: 1
			});
		},
		BackHome() {
			// 关闭当前页面
			uni.switchTab({
				url: '/pages/index/index'
			});
		},
		toHistoryList() {
			uni.navigateTo({
				url: '/subpages/history/history'
			});
		}
	}
};
</script>

<style lang="scss">
.header-box {
	width: 100% !important;
	height: 60px;
	background: #1e80ff !important;
	top: 0 !important;
	line-height: 60px;
	.logo-box{
		image{
			width: 40rpx;
			height: 40rpx;
		}
	}
	.nav-box {
		margin: 0 auto;
		width:90% !important;
		display: flex !important;
		align-items: center !important;
		justify-content: center !important;
		height: 60px;
		line-height: 60px;
		.header-input{
			background: #ffffff !important;
			font-size: 22px;
			color: #909399;
		}
	}
}
</style>
