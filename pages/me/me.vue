<template>
	<view>
		<text>我的</text>
		<text>{{title}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:""
			}
		},
		onLoad() {
			uni.$on('quanju',name=>{
				this.title = name
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
