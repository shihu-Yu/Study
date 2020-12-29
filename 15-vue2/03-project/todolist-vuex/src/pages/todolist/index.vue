
<template>
    <div class="todolist">
        <div id="app">
            <Head ></Head>
            <List ></List>
        </div>  
    </div>
</template>


<script>
import Head from '../../components/head'
import List from '../../components/list'
import {mapActions} from 'vuex'
import {LOAD_ITEM} from './store/types'

export default {
    name:'Todolist',
    components:{
        Head,
        List
    },
     methods:{
        // ...mapActions(['loadItem'])
        // 另一种写法
        /*
        ...mapActions({
            loadItem:'loadItem'
        })
        */
        ...mapActions({
            loadItem:LOAD_ITEM
        })
    },

    // 生命周期函数
    mounted(){
        // 派发action 初始化数据
        // this.$store.dispatch('loadItem')
        this.loadItem()
    },
    
   
}
</script>

<!--如果加上属性 scoped就表示这些样式只对当前的组件有效 -->
<style lang="less" scoped>
    *{
            margin: 0;
            padding: 0;
        }
        
        #app{
            width: 800px;
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
        }
        
        
</style>