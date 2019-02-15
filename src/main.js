// 入口文件
import Vue from "vue"
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入自已的router路由模块
 import router from './router'

//设置vue-resource的请求路径
Vue.http.options.root='http://www.lovegf.cn:8899/api/'
//导入路由包
import VueRouter from 'vue-router'

//安装路由模块
Vue.use(VueRouter)

//css  reset css 初始化
import './styles/common.css'

//引入mui的CSS样式文件
 import './lib/mui/css/mui.min.css'

 //引入mui的扩展字体的CSS文件
    import './lib/mui/css/icons-extra.css'


// 导入mint-UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//安装mint-UI全局注册所有组件
Vue.use(MintUI)

Vue.config.productionTip = false

import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern = 'YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(pattern)
})

//全局注册组件
import comment from './components/comment.vue'
Vue.component('comment',comment)

//导入APP根组件 
import app from './App.vue'



var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})