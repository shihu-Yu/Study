// 整个项目的入口
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
new Vue({
  render: h => h(App)
}).$mount('#app')
*/

// 这种写法效果和上面的那种效果相同
new Vue({
    el:'#app',
    render: h => h(App)
})
