// 入口文件
import Vue from "vue"

//引入mui的CSS样式文件
 import './lib/mui/css/mui.min.css'

 //引入mui的扩展字体的CSS文件
//  import './lib/mui/css/icons-extra.css'


// 导入mint-UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//安装mint-UI全局注册所有组件
Vue.use(MintUI)

//导入APP根组件 
import app from './App.vue'



var vm = new Vue({
    el:'#app',
    render: c => c(app)
})