<template>
    <div class="head">
        <div class="head">
            <input type="text" v-model='task' />
            <button @click="handelAddItem">提交</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    props:{
        addItem:{
            type:Function
        }
    },
    data(){
        return{
            task:''
        }
    },
    methods:{
        handelAddItem(){
            this.addItem(this.task)
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