
<template>
    <div class="todolist">
        <div id="app">
            <Head :addItem="addItem"></Head>
            <List :delItem="delItem" :list="list"></List>
        </div>  
    </div>
</template>


<script>
import axios from 'axios'
import Head from '../../components/head'
import List from '../../components/list'
export default {
    name:'Todolist',
    components:{
        Head,
        List
    },
    data(){
            return{
                list:[],
            }
        },
    async mounted(){
        const result = await axios.get('http://127.0.0.1:3000')
        this.list = result.data
    },
    methods:{
        addItem(task){
            this.list.push({
                id:Date.now(),
                task:task,
            })
        },
        delItem(id){
            const list  = this.list.filter(item=>item.id != id)
            this.list = list
        }
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