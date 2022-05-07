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
						<!-- #ifndef APP-NVUE -->
						<u-input placeholder="请输入搜索内容" v-model="searchKeyword" @focus.stop="toHistoryList">
						<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						<u--input placeholder="请输入搜索内容" v-model="searchKeyword" @focus.stop="toHistoryList">
						<!-- #endif -->
							<template slot="suffix">
								
								<u-icon class="photo-icon" name="photo" @click.stop="checkPhoto()"></u-icon>
							</template>
						<!-- #ifndef APP-NVUE -->
						</u-input>
						<!-- #endif -->
						<!-- #ifdef APP-NVUE -->
						</u--input>
						<!-- #endif -->
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
		<view class="card-header">
			<view class="card-one card-left" @tap="gotoTab('/pages/feeds/feeds')">
				<image src="@/static/img/image.png" class="img" mode="aspectFill"></image>
				<view class="iright">
					<view class="title" @click="clickTest()">
						个人中心
					</view>
				</view>
			</view>
			<view class="card-one card-right" @tap="gotoTab('/pages/me/me')">
				<image src="@/static/img/image.png" class="img" mode="aspectFill"></image>
				<view class="iright">
					<view class="title">
						个人中心
					</view>
				</view>
			</view>
			
		</view>
		<view class="title" @click="clickTest()">
			个人中心
		</view>
		<!-- <navigator url="/subpages/chat/chat">前往和知心姐姐聊天</navigator>
		<child :msg=title @tongxun='fun2'></child> -->
	</view>
</template>

<script>
import Child from '@/components/child.vue';
import { postMenu, getMenu,postTopicTitle } from '@/config/api.js';
export default {
	data() {
		return {
			title: 'Hello',
			searchKeyword: '',
			bannerList: [{
				"url":"/static/img/1.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"/static/img/2.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"/static/img/3.png",
				"link":"http://www.baidu.com"
			},
			{
				"url":"/static/img/4.png",
				"link":"http://www.baidu.com"
			},
			],
			tips: '',
			value: '',
			url:""
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
		clickTest(){
			console.log(22)
			// get请求
			const aa = postTopicTitle({title:'浏览器', custom: { auth: true }}).then(() => {
				console.log(3333)
			}).catch(() =>{
				
			})
			console.log('eeee',aa)
		},
		
		fun2(msg) {
			this.title = msg;
		},
		toHistoryList() {
			console.log(222);
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
		}
	}
};
</script>

<style lang="scss">
.box {
	padding-top: 70px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.search-box {
		width: 90%;
	}
	.photo-box {
		margin-top: 60rpx;
		width: 40px;
		height: 40px;
		background: red;
		line-height: 40\px;
		top: 20rpx;
		right: 110rpx;
		.photo-icon{
			font-size: 40px;
		}
	}
	.advertising-box{
		width: 90%;
		margin-top: 10px;
		swiper {
			height: calc(750rpx / 3); //calc(屏幕宽度 / (图片宽度 / 图片高度))
			
		}
		

	}
	.card-header{
		background: red;
		display: flex;
		.card-one{
			.img{
				width: 100rpx;
				height: 100rpx;
			}
		}
		
	}
}

</style>
