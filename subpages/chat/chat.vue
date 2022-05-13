<template>
	<scroll-view class="out-body">
		<!-- 聊天列表 -->
		<view class="chat-body">
			<block v-for="(item, index) in chatList" :key="index">
				<view class="chat-one chat-one-left" v-if="!item.isMe">
					<image src="" class="chat-face" mode="" />
					<view class="chat-box">
						<view class="chat-sender">知心姐姐</view>
						<view class="chat-content" v-if="item.type === 'txt'">{{ item.content }}</view>
						<image :src="item.content" v-if="item.type === 'img'" mode="aspectFit" />
					</view>
				</view>
				<view v-else class="chat-one chat-one-right">
					<image src="" class="chat-face" />
					<view class="chat-box">
						<view class="chat-content" v-if="item.type === 'txt'">{{ item.content }}</view>
					</view>
					<image :src="item.content" v-if="item.type === 'img'" mode="aspectFit" />
				</view>
			</block>
		</view>
		<!-- 聊天输入 -->
		<view class="chat-footer">
			<input class="msg-input" type="text" v-model="myInput"/>
			<image src="" @click="choseImgAndSend()" class="img-chose" />
			<view class="send-btn" @click="sendMsg">发送</view>
		</view>
	</scroll-view>
</template>

<script>
export default {
	data() {
		return {
			//保存聊天内容
			chatList: [
				{
					isMe: false,
					type: 'txt',
					content: '你好。我是知心姐姐'
				},
				{
					isMe: false,
					type: 'img',
					content: ''
				},
				{
					isMe: true,
					type: 'txt',
					content: '哇，你真漂亮'
				},
				{
					isMe: true,
					type: 'img',
					content: ''
				}
			],
			//要发送的文字
			myInput:""
		};
	},
	onLoad() {
		
	},
	onShow() {
		if(!!uni.getStorageSync('chatList')){
			this.chatList = JSON.parse(uni.getStorageSync('chatList'))
			console.log(this.chatList)
			const timer = setTimeout(()=>{
				clearTimeout(timer)
			    uni.pageScrollTo({
			        scrollTop: 2000000,
			        duration : 0
			    })
			},50)
		}
	},
	methods: {
		sendMsg(){
			console.log(this.myInput)
			if(!this.myInput) return
			let msg = {
				isMe: true,
				type: 'txt',
				content: this.myInput
			};
			this.chatList.push(msg);
			const timer2 = setTimeout(()=>{
				clearTimeout(timer2)
			    uni.pageScrollTo({
			        scrollTop: 2000000,
			        duration : 0
			    })
			},50)
			uni.setStorageSync('chatList', JSON.stringify(this.chatList));
			this.myInput = ''
		},
		choseImgAndSend() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'], //相册相机
				success: res => {
					console.log(res.tempFilePaths[0]);
					let sendMsg = {
						isMe: true,
						type: 'img',
						content: res.tempFilePaths[0]
					};
					this.chatList.push(sendMsg);
					let resMsg = {
						isMe: false,
						type: 'img',
						content: res.tempFilePaths[0]
					};
					this.chatList.push(resMsg);

					const timer2 = setTimeout(()=>{
						clearTimeout(timer2)
					    uni.pageScrollTo({
					        scrollTop: 2000000,
					        duration : 0
					    })
					},50)
					uni.setStorageSync('chatList', JSON.stringify(this.chatList));
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.out-body {
	height:auto;
	// vh是相当于视窗的高度(满高是100vh)
	background: #e7daf4;
	.chat-body {
		.chart-timer {
			text-align: center;
			color: #616161;
			font-size: 13px;
		}
		.chat-one {
			display: flex;
			padding: 5px 5px 10px 0px;
			.chat-face {
				width: 50px;
				height: 50px;
				border-radius: 100px;
			}
			.chat-box {
				margin-left: 16px;
				.chat-sender {
					color: #404040;
				}
				.chat-content {
					margin-top: 5rpx;
					background: #ffffff;
					border-radius: 4px;
					padding: 5px;
					max-width: 500rpx;
				}
			}
		}
		.chat-one-left {
			margin-left: 5px;
			flex-direction: row;
		}
		.chat-one-right {
			margin-right: 5px;
			flex-direction: row-reverse;
			.chat-box {
				margin: 8px 10px 0px 0px;
			}
		}
	}
	.chat-footer {
		position: fixed;
		bottom: 0;
		display: flex;
		background: #e7daf4;
		width: 100%;
		border-top: 1px solid #d2cfd4;
		justify-content: center;
		align-items: center;
		.msg-input {
			background: #ffffff;
			height: 50rpx;
			width: 550rpx;
		}
		.send-btn {
			background: green;
			width: 100rpx;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			color: #ffffff;
			border-radius: 5px;
			margin-left: 15rpx;
		}
		.img-chose {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
</style>
