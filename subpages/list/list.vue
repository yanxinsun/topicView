<template>
	<view class="list-box">
		<view class="search-box"><u-search placeholder="请输入搜索内容" v-model="searchKeyword" @custom="toSearchTitle"></u-search></view>
		<u-sticky bgColor="#fff"><u-tabs :list="list1"></u-tabs></u-sticky>
		<view class="content-box">
			<u-list @scrolltolower="scrolltolower">
				<view v-if="topicList.length != 0">
					<u-list-item v-for="(item, index) in topicList" :key="index">
						<view class="content-list">
							<text class="topic-title">{{ item.title.slice(0, 24) }}</text>
							<text class="topic-content">{{ item.content.slice(0, 80) }}</text>
						</view>
					</u-list-item>
				</view>
				<view v-else><u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png"></u-empty></view>
			</u-list>
		</view>
		<!-- <text>通讯录</text>
		<text>{{userName}}</text>
		<button @click="login(1)">login</button>
		<button @click="logout(2)">logout</button> -->
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { postTopicTitle } from '@/config/api.js';
export default {
	data() {
		return {
			topicList: [],
			urls: [
				'https://cdn.uviewui.com/uview/album/1.jpg',
				'https://cdn.uviewui.com/uview/album/2.jpg',
				'https://cdn.uviewui.com/uview/album/3.jpg',
				'https://cdn.uviewui.com/uview/album/4.jpg',
				'https://cdn.uviewui.com/uview/album/5.jpg',
				'https://cdn.uviewui.com/uview/album/6.jpg',
				'https://cdn.uviewui.com/uview/album/7.jpg',
				'https://cdn.uviewui.com/uview/album/8.jpg',
				'https://cdn.uviewui.com/uview/album/9.jpg',
				'https://cdn.uviewui.com/uview/album/10.jpg'
			],
			list1: [
				{
					name: '全部'
				},
				{
					name: '前端'
				},
				{
					name: '后端'
				},
				{
					name: 'html'
				},
				{
					name: 'css'
				},
				{
					name: 'es6'
				}
			],
			searchKeyword: ''
		};
	},
	computed: {
		...mapState(['userName'])
	},
	onLoad(option) {
		// this.loadmore();
		this.searchKeyword = option.searchKey;
		this.toSearchTitle();
		console.log('333333', this.topicList.length);
	},
	methods: {
		...mapActions(['login', 'logout']),
		//根据搜索标题查询题目及内容
		async toSearchTitle(searchKeyword) {
			const topicResp = await postTopicTitle({ title: this.searchKeyword, custom: { auth: true } });
			console.log('topicResp', topicResp);
			this.topicList = topicResp.topicInfo;
		},
		scrolltolower() {
			this.loadmore();
		},
		loadmore() {
			for (let i = 0; i < 30; i++) {
				this.indexList.push({
					url: this.urls[uni.$u.random(0, this.urls.length - 1)]
				});
			}
		}
	}
};
</script>

<style lang="scss">
.list-box {
	display: flex;
	flex-direction: column;
	background: #f0f0f0;
	.search-box {
		background: #ffffff;
		padding: 10rpx;
	}
	.content-box {
		width: 95%;
		margin: 0 auto;
		margin-top: 20rpx;
		.content-list {
			margin-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			background: #ffffff;
			border-radius: 10rpx;
			padding: 15rpx;
			.topic-title {
				font-size: 30rpx;
				color: #222222;
			}
			.topic-content {
				margin-top: 10rpx;
				font-size: 26rpx;
				color: #555555;
			}
		}
	}
}
</style>
