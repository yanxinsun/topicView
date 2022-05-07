<template>
	<view>
		<view class="search-box">
			<u-search placeholder="请输入搜索内容" v-model="searchKeyword" @custom="toSearchPage"></u-search>
		</view>
		<view class="search-history-list">
			<u-list @scrolltolower="scrolltolower">
				<u-list-item v-for="(item, index) in indexList" :key="index">
					<u-cell :title="`列表长度-${index + 1}`">
					</u-cell>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
import {postTopicTitle} from '@/config/api.js'
export default {
	data() {
		return {
			indexList: [],
			searchKeyword:"",
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
			]
		};
	},
	onLoad() {
		this.loadmore();
	},
	methods: {
		scrolltolower() {
			this.loadmore();
		},
		loadmore() {
			for (let i = 0; i < 30; i++) {
				this.indexList.push({
					url: this.urls[uni.$u.random(0, this.urls.length - 1)]
				});
			}
		},
		toSearchPage(){
			uni.navigateTo({
				url:'/subpages/list/list'
			})
		}
		
		
	}
};
</script>

<style></style>
