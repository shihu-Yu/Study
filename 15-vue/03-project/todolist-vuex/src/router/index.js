// router是路由目录
import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装router
Vue.use(VueRouter)

// 引入组件
import Home from '../pages/home'
import Todolist from '../pages/todolist'

// 定义组件
const routes = [
    {path:'/home',component:Home},
    {path:'/todolist',component:Todolist}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
