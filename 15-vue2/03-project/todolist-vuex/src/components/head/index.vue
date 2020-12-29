<template>
    <div class="head">
        <div class="head">
            <input type="text" v-model='task' />
            <button @click="handelAddItem">提交</button>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name:'Home',
    data(){
        return{
            task:''
        }
    },
    methods:{
        // 使用辅助函数mapMutations将组件中的 methods 映射为 store.commit 调用
        // ...mapMutations(['addItem']),
        // 另一种写法
        ...mapMutations({
            addItem:'addItem'
        }),
        handelAddItem(){
            const payload = {
                id:Date.now(),
                task:this.$data.task
            }
        
            /*
            // 当不需要发送异步请求处理时可以直接在组件中派发 commit
            this.$store.commit('addItem',payload)
           */ 
            this.addItem(payload)
            this.task = ''
        }
    }
}
</script>

<style lang="less" scoped>
        .head{
            display: flex;
            height: 40px;
            margin-bottom: 10px;
        }
        .head input{
            width: 700px;
            outline: none;
            padding: 10px;
            font-size: 28px;
        }
        .head button{
            width: 100px;
        }
</style>