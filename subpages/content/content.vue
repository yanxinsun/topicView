<template>
	<view class="topic-content">
		<view class="topic-title">
			{{topicInfo.title}}
		</view>
		<view class="topic-content">
			{{topicInfo.content}}
		</view>
	</view>
</template>

<script>
	import {getTopicById} from '@/config/api.js'
	export default {
		data() {
			return {
				topicId:"",
				topicInfo:""
			}
		},
		onLoad(option) {
			this.topicId = option.id
			this.getOptionById()
		},
		methods: {
			async getOptionById(){
				const res = await getTopicById({ id: this.topicId })
				console.log(res)
				this.topicInfo = res.topicInfo
			}
		}
	}
</script>

<style lang="scss">
	.topic-content{
		margin-top: 14rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.topic-title{
			width: 90%;
			font-weight: 500;
			font-size: 34rpx;
			color: #222222;
		}
		.topic-content{
			width: 90%;
			font-size: 30rpx;
			color: #333333;
		}
	}


</style>
