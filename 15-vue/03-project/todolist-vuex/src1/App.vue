<!-- 根组件模板 -->
<template>
	<div id="app">
		<nav>
			<router-link to="/home">Home</router-link> | <router-link to="/todolist">todolist</router-link>
		</nav>
		<!-- 路由的出口 -->
		<!-- 路由匹配带的组件将会在这里展示 -->
		<router-view></router-view>
	</div>
</template>

<!--逻辑 -->
<script>
// 引入组件
import Home from './pages/home/index.vue'
	export default {
		// 配置组件
		components:{
			Home
		}
	}
</script>




