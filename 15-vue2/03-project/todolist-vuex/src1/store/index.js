// 引入vue he vuex
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// 安装Vuex
Vue.use(Vuex)

// 创建store 实例    一个应用只能有一个store实例
const store = new Vuex.Store({
    // state 对象
    state,
    // Vuex的计算属性
    getters,
    actions,
    mutations,
})


// 导出store
export default store