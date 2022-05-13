<template>
	<view>
		<view class="search-box">
			<u-search placeholder="请输入搜索内容" v-model="searchKeyword" @custom="toSearchPage"></u-search>
		</view>
		<view class="search-history-list">
			<u-list @scrolltolower="scrolltolower">
				<u-list-item v-for="(item, index) in historyArr" :key="index">
					<u-cell :title="item" @click="toList(item)">
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
			historyArr:[],
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
		this.getHistory();
	},
	methods: {
		//获取历史搜索记录
		getHistory(){
			//读取缓存
			const history = uni.getStorageSync('historyKey');
			if(history){
				this.historyArr = history
			}
		},
		//点击历史跳转
		toList(opt){
			uni.navigateTo({
				url:'/subpages/list/list?searchKey='+ opt
			})
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
		},
		toSearchPage(){
			//数组内是否有重复，没有写入，有下一步
			const isSet = this.historyArr.indexOf(this.searchKeyword)
			if(isSet == -1){
				this.historyArr.unshift(this.searchKeyword)
			}
			//写入缓存
			uni.setStorageSync('historyKey',this.historyArr);
			uni.navigateTo({
				url:'/subpages/list/list?searchKey='+this.searchKeyword
			})
		}
		
		
	}
};
</script>

<style></style>
