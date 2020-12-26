<!-- 模板 -->
<template>
    <div class="home"> 
        {{msg}}home pages
    </div>
</template>

<!-- 逻辑 -->
<script>
export default {
    name:'Home',
    data(){
        return{
            msg:'hello'
        }
    }
}
</script>

<!--如果加上属性 scoped就表示这些样式只对当前的组件有效 -->
<style lang="less" scoped>
    .home{
        color:brown;
    }
</style>