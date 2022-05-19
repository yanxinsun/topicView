<template>
	<view>
		<view class="search-box">
			<u-search placeholder="请输入搜索内容" v-model="searchKeyword" @custom="toSearchPage"></u-search>
		</view>
		<view class="search-history-list" v-if="historyArr.length > 0">
			<view class="search-history-item" v-for="(item, index) in historyArr">
				<u-icon name="clock" color="#555555" size="24" class="icon-clock"></u-icon>
				<view class="history-text" @click="toList(item)">
					{{item}}
				</view>
				<u-icon name="close" color="#555555" size="24" class="icon-close" @click="delHistory(item)"></u-icon>
			</view>
			
		</view>
		<button class="empty-history" v-if="historyArr.length>=3" @click="emptyHistory()">
			清除所有历史记录
		</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			indexList: [],
			searchKeyword:"",
			historyArr:[],
			
		};
	},
	onLoad() {
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
		//删除历史记录
		delHistory(opt){
			console.log(opt)
			const index = this.historyArr.indexOf(opt); 
			if (index > -1) { 
				this.historyArr.splice(index, 1); 
			} 
			uni.setStorageSync('historyKey',this.historyArr);
			
		},
		//清空历史记录
		emptyHistory(){
			uni.setStorageSync('historyKey',[]);
			this.getHistory()
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

		
		//跳转搜索详情
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

<style lang="scss">
	.search-box{
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
	}
	.search-history-list{
		margin: 0 auto;
		width: 90%;
		color: #444444;
		margin-top: 10rpx;
		.search-history-item {
			height: 70rpx;
			padding:15rpx auto 15rpx auto;
			font-size: 40rpx;
			border-bottom: 1px solid #d7d9de;
			display: flex;
			line-height:70rpx;;
			.icon-clock{
				flex-grow: 1;
			}
			.icon-close{
				flex-grow: 1;
			}
			.history-text{
				flex-grow: 8;
			}
		}
	}
	
</style>
