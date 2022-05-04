<template>
	<view>
		<text>通讯录</text>
		<text>{{userName}}</text>
		<button @click="login(1)">login</button>
		<button @click="logout(2)">logout</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			...mapState(['userName'])
		},
		methods: {
			...mapActions(['login','logout'])
		}
	}
</script>

<style>

</style>
