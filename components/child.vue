<template>
	<view>
		<text class="red">我是组件</text>
		<view class="">
			{{msg}}
		</view>
		<button type="default" @click="toFather">点我</button>
	</view>
</template>

<script>
	export default {
		name:"child",
		props:['msg'],
		data() {
			return {
				
			};
		},
		methods:{
			toFather(){
				this.$emit('tongxun','hahaha')
				uni.$emit('quanju','hehehehe')
			}
		}
	}
</script>

<style>
.red{
	color: red;
}
</style>
