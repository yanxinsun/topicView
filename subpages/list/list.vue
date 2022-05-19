<template>
	<view class="list-box">
		<view class="search-box">
			<u-search class="search-text" placeholder="请输入搜索内容" v-model="searchKeyword" @custom="toSearchTitle"></u-search>
			</view>
		<u-sticky bgColor="#fff"><u-tabs :list="classifyList" @click="getTopicByClassify"></u-tabs></u-sticky>
		<view class="content-box">
			<u-list @scrolltolower="scrolltolower">
				<view v-if="topicList.length != 0">
					<u-list-item v-for="(item, index) in topicList" :key="index">
						<view class="content-list" @click="toTopicContent(item)">
							<text class="topic-title">{{ item.title.slice(0, 24) }}</text>
							<text class="topic-content">{{ item.content.slice(0, 80) }}</text>
						</view>
					</u-list-item>
				</view>
				<view v-else><u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png"></u-empty></view>
			</u-list>
			<view v-show="isHaveTopic" class="content-bottom">已经到底部了～</view>
		</view>
		
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { postTopicTitle,getClassifyList} from '@/config/api.js';
export default {
	data() {
		return {
			topicList: [],//题目列表
			classifyList: [],//分类列表
			searchKeyword: '',//查询关键字
			pageNum:1,//默认第一页
			pageSize:10,//默认10条
			classify:1,//默认分类为全部
			isHaveTopic:false //是否还有剩余数据
		};
	},
	computed: {
		...mapState(['userName'])
	},
	onLoad(option) {
		this.searchKeyword = option.searchKey;
		this.getClassify();
		this.toSearchTitle();
	},
	methods: {
		...mapActions(['login', 'logout']),
		//根据搜索标题查询题目及内容
		async toSearchTitle() {
			const topicResp = await postTopicTitle({ 
				title: this.searchKeyword?this.searchKeyword:'',
				classify:this.classify,
				pageNum:this.pageNum,
				pageSize:this.pageSize
			});
			this.topicList = topicResp.topicInfo;
		},
		scrolltolower() {
			this.pageNum ++
			this.loadmore();
		},
		//下拉获取分页数据
		async loadmore() {
			if(this.isHaveTopic == false){
				const res = await postTopicTitle({
					title: this.searchKeyword,
					classify:this.classify,
					pageNum:this.pageNum,
					pageSize:this.pageSize
				});
				if(res.topicInfo.length!=0){
					this.topicList = this.topicList.concat(res.topicInfo)
				}else{
					this.isHaveTopic = true
				}
			}
			
		},
		//获取分类信息
		async getClassify(){
			const classifyListResp = await getClassifyList();
			this.classifyList = classifyListResp.classifyInfo;
			console.log(classifyListResp)
		},
		//根据分类查询题目
		async getTopicByClassify(item){
			this.classify = item.id
			const classifyListResp = await postTopicTitle({ title: this.searchKeyword, classify:item.id });
			this.topicList = classifyListResp.topicInfo;
		},
		//跳转题目详情页
		toTopicContent(option){
			uni.navigateTo({
				url:'/subpages/content/content?id='+ option.id
			})
		}
		
	}
};
</script>

<style lang="scss">
.list-box {
	display: flex;
	flex-direction: column;
	background: #f0f0f0;
	width: 100%;
	.search-box {
		width: 100%;
		margin: 0 auto;
		height: 90rpx;
		line-height: 90rpx;
		background: #ffffff;
		.search-text{
			width: 90%;
			background: #ffffff;
			margin: 0 auto !important;
		}
	}
	.content-box {
		width: 95%;
		margin: 0 auto;
		margin-top: 20rpx;
		display: flex;
		align-items: center; /* 垂直居中 */
		    flex-direction: column;
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
