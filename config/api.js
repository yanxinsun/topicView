const http = uni.$u.http

// // post请求，获取菜单
// export const postMenu = (params, config = {}) => http.post('//ebapi/public_api/index', params, config)

// // get请求，获取菜单，注意：get请求的配置等，都在第二个参数中，详见前面解释
// export const getMenu = (data) => http.get('/api/topic/title', data)

// 根据search获取topic
export const postTopicTitle = (params, config = {}) => http.post('/topic/title', params, config)
//获取首页热门列表
export const postTopicHot = (params, config = {}) => http.post('/topic/hot', params, config)
//获取分类列表
export const getClassifyList = (params,config = {}) => http.get('/classify',params,config)
//通过id获取题目
export const getTopicById = (params,config = {}) => http.post('/topic/content',params,config)
