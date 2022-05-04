import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'

Vue.use(uView)
Vue.config.productionTip = false
//调用store vuex
import store from '@/store/index.js'

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
