<template>
	<view class="box">
		<view class="logo-box"></view>
		<view class="search-box">
			<view class="u-demo-block">
					<view
						class="u-demo-block__content"
						style="margin-top: 15px;"
					>
						<!-- 注意：由于兼容性差异，如果需要使用前后插槽，nvue下需使用u--input，非nvue下需使用u-input -->
						<u--input placeholder="请输入搜索内容" v-model="searchKeyword" @focus="toHistoryList()"></u--input>
							<template slot="suffix">
								<u-icon class="photo-icon" name="photo" @click.stop="checkPhoto()"></u-icon>
							</template>
					</view>
				</view>
		</view>
		<view class="advertising-box">
			<swiper autoplay="true" :interval="2000" :duration="500" circular="true" indicator-active-color="#fff" easing-function="true" indicator-dots='true'>
				<swiper-item v-for="(item, index) in bannerList" :key="index">
					<navigator  open-type="navigate" :url="'/pages/webview/webview?url='+encodeURI(item.link)">
						<image :src="item.url"></image>
					</navigator>
					
				</swiper-item>
			</swiper>
		</view>
		<view class="topic-box">
			<u-list class="topic-list">
				<u-list-item v-for="(item, index) in topicList" :key="index" class="topic-item">
					<text class="topic-title" :lines="2" :text="">{{item.title}}</text>
					<text class="topic-content" :lines="3" :text="item.content"></text>
				</u-list-item>
			</u-list>

			</uni-section>
		</view>

	</view>
</template>

<script>
import Child from '@/components/child.vue';
import { postMenu, getMenu,postTopicHot } from '@/config/api.js';
export default {
	data() {
		return {
			title: 'Hello',
			searchKeyword: '',
			bannerList: [{
				"url":"http://img.ssyyxx.xyz/topic/1.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"http://img.ssyyxx.xyz/topic/2.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"http://img.ssyyxx.xyz/topic/3.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"http://img.ssyyxx.xyz/topic/4.png",
				"link":"http://www.baidu.com"
			},
			],
			tips: '',
			value: '',
			topicList:[],
			indexList: [],
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
	padding-top: 70rpx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.search-box {
		width: 90%;
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
		.topic-list{
			overflow: hidden;
			height: 200rpx;
			width: 90%;
			margin: 0 auto;
			margin-top: 10rpx;
			.topic-item{
				height: 240rpx;
				padding:0 0 10rpx 0 ;
				border-bottom: 1px solid #999999;
				color: red;
				
			}
			
			
		}
		
	}
	
}

</style>
