import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.use(uView)

// Vue.config.productionTip = false
//调用store vuex
import store from '@/store/index.js'

App.mpType = 'app'

if(process.env.NODE_ENV==='development'){
	
	console.log('开发环境')
}else{
	console.log('生产环境')
}
const app = new Vue({
    ...App,
	store
})
// 引入请求封装，将app参数传递到配置中
require('@/config/request.js')(app)

app.$mount()
