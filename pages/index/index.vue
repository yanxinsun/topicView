<template>
	<view class="box">
		<uniNavBar :titleName="topData.address"></uniNavBar>
		<!-- input搜索框部分 -->
		<view class="search-box">
			<view class="u-demo-block">
				<view class="u-demo-block__content">
					<template slot="suffix">
						<u-icon class="photo-icon" name="photo" @click.stop="checkPhoto()"></u-icon>
					</template>
				</view>
			</view>
		</view>
		<view class="advertising-box">
			<u-swiper
				:list="bannerList"
				keyName="url"
				showTitle
				circular
			    ></u-swiper>
		</view>
		<view class="topic-box">
			<u-list class="topic-list">
				<u-list-item v-for="(item, index) in topicList" :key="index">
					<u-cell :title="item.title">
						<u-avatar>{{item.content}}</u-avatar>
						<text></text>
					</u-cell>
				</u-list-item>
			</u-list>

			</uni-section>
		</view>

	</view>
</template>

<script>
// import Child from '@/components/child.vue';
import { postMenu, getMenu,postTopicHot } from '@/config/api.js';
import uniNavBar from "../../components/topBar.vue"
export default {
	data() {
		return {
			topData:{
				address:"地址"
			},
			searchKeyword: '',
			bannerList: [{
				"url":"http://www.ssyyxx.xyz/images/1.png",
				"link":"http://www.baidu.com",
				title: '昨夜星辰昨夜风，画楼西畔桂堂东',
			},
			{
				"url":"http://www.ssyyxx.xyz/images/2.png",
				"link":"http://www.baidu.com",
				title: '昨夜星辰昨夜风，画楼西畔桂堂东',
			},
			{
				"url":"http://www.ssyyxx.xyz/images/3.png",
				"link":"http://www.baidu.com",
				title: '昨夜星辰昨夜风，画楼西畔桂堂东',
			},
			{
				"url":"http://www.ssyyxx.xyz/images/4.png",
				"link":"http://www.baidu.com",
				title: '昨夜星辰昨夜风，画楼西畔桂堂东',
			},
			],
			tips: '',
			value: '',
			topicList:[],
			indexList: [],
		};
	},

	components: {
		// Child
		uniNavBar
	},
	onShow() {
	},
	onPullDownRefresh() {
	},
	onResize() {
	},
	onLoad() {
		this.topicListHot()
	},
	watch: {
	      value(newValue, oldValue) {
	        // console.log('v-model', newValue);
	      }
	    },
	methods: {
	
		gotoTab(url){
			uni.switchTab({
				url
			})
		},
		
		toHistoryList() {
			uni.navigateTo({
				url: '/subpages/history/history'
			});
		},
		//拍照搜索或者上传图片
		checkPhoto(){
			uni.chooseImage({
				count: 6, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function (res) {
					console.log(JSON.stringify(res.tempFilePaths));
				}
			});
		},

		//获取热门列表
		async topicListHot(){
			console.log('获取热门列表')
			const topicResp = await postTopicHot({ pageNum: 1,pageSize:10, custom: { auth: true } });
			console.log('topicResp', topicResp);
			this.topicList = topicResp.topicInfo;
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	.search-box {
		width: 90%;
		.u-demo-block{
			width: 70%;
			background: red;
		}
	}
	.advertising-box{
		width: 90%;
		margin-top: 10rpx;
		swiper {
			height: calc(750rpx / 3); //calc(屏幕宽度 / (图片宽度 / 图片高度))
			
		}
		
	}
	.topic-box{
		width: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		.topic-list{
			overflow: hidden;
			height: 200rpx;
			width: 90%;
			margin-top: 10rpx;
			
		}
		
	}
	
}

</style>
