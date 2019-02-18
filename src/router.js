import Vue from 'vue'
import VueRouter from 'vue-router'

//导入对应的路由组件
import homeComponent from './pages/home/index.vue'
import memberComponent from './pages/member/index.vue'
import shopcarComponent from './pages/shopcar/index.vue'
import searchComponent from './pages/search/index.vue'
import newsListComponent from './pages/newsList/index.vue'
import newsInfoComponent from './pages/newsInfo/index.vue'
import photoListComponent from './pages/photoList/index.vue'
import photoInfoComponent from './pages/photoInfo/index.vue'


 Vue.use(VueRouter)
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: homeComponent },
    { path: '/member', component: memberComponent },
    { path: '/shopcar', component: shopcarComponent },
    { path: '/search', component: searchComponent },
    { path: '/home/newsList', component: newsListComponent },
    { path: '/home/newsInfo/:id', component: newsInfoComponent },
    { path: '/home/photoList', component: photoListComponent },
    { path: './home/photoInfo', component: photoInfoComponent}
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类,默认的类叫做router-link-active
})

// 把路由对象暴露出去
export default router