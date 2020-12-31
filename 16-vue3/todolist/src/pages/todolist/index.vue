<template>
     <div class="todolist">
        <div class="head">
            <input type="text" v-model='task' />
            <button @click="addItem">提交</button>
        </div>
        <transition-group  class="list" tag='ul' name="fade" appear>
            <li 
                class="item"
                v-for="item in list"
                :key="item.id"
                @click="delItem(item.id)"
            >
                {{item.task}}
            </li>
        </transition-group>
        <p class="footer">共计{{total}}个项目</p>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default{
    name:"Todolist", 
    setup(){

    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
.todolist{
    width: 800px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
}
.todolist .head{
    display: flex;
    height: 40px;
    margin-bottom: 10px;
}
.todolist .head input{
    width: 700px;
    outline: none;
    padding: 10px;
    font-size: 28px;
}
.todolist .head button{
    width: 100px;
}
.todolist .item{
    width: 100%;
    line-height: 40px;
    padding: 5px 0;
    border-bottom: 1px dashed #ccc;
    cursor: pointer;
}
.todolist .item:hover{
    background-color:#eee
}
.todolist .footer{
    margin-top: 15px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
</style>

