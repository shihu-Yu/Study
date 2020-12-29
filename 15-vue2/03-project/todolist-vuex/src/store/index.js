// 引入vue he vuex
import Vue from 'vue'
import Vuex from 'vuex'
import todolist from '../pages/todolist/store'

// 安装Vuex
Vue.use(Vuex)

// 创建store 实例    一个应用只能有一个store实例
const store = new Vuex.Store({
    modules:{
        todolist
    }
})


// 导出store
export default store