<template>
	<view class="box">
		<view class="logo-box"></view>
		<view class="search-box"><u-search placeholder="请输入搜索内容" v-model="searchKeyword" @focus="toHistoryList"></u-search></view>
		<view class="advertising-box"><u-swiper :list="advertisingImg" keyName="image" showTitle :autoplay="false" circular></u-swiper></view>
		<!-- <navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		<child :msg=title @tongxun='fun2'></child> -->
	</view>
</template>

<script>
import Child from '@/components/child.vue';
export default {
	data() {
		return {
			title: 'Hello',
			searchKeyword: '',
			advertisingImg: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			]
		};
	},

	components: {
		Child
	},
	onShow() {
		console.log('onshow');
	},
	onPullDownRefresh() {
		console.log('页面下啦');
	},
	onResize() {
		console.log('页面大小i变化');
	},
	onLoad() {
		console.log(getCurrentPages());
		uni.$on('quanju', name => {
			this.title = name;
		});
	},
	methods: {
		fun2(msg) {
			this.title = msg;
		},
		toHistoryList() {
			console.log(222);
			uni.navigateTo({
				url: '/pages/history/history'
			});
		}
	}
};
</script>

<style>
.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.search-box {
	width: 90%;
	margin-top: 30px;
}
.advertising-box{
	width: 90%;
	margin-top: 10px;
}
</style>
