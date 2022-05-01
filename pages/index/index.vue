<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<text>首页</text>
		<view class="">
			<navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		</view>
		<child :msg=title @tongxun='fun2'></child>
	</view>
</template>

<script>
	import Child from '@/components/child.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			Child
		},
		onShow() {
			console.log('onshow')
		},
		onPullDownRefresh() {
			console.log('页面下啦')
		},
		onResize() {
			console.log('页面大小i变化')
		},
		onLoad() {
			console.log(getCurrentPages())
			uni.$on('quanju',name=>{
				this.title = name
			})
		},
		methods: {
			fun2(msg){
				this.title=msg
			},
			
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
