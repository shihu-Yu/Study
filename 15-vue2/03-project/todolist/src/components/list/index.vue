<template>
    <div class="todolist">
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
export default {
    name:'List',
    props:{
        delItem:{
            type:Function
        },
        list:{
            type:Array,
            default:[]
        }
    },
    computed:{
        total(){
            return this.list.length
        }
    }
}
</script>


<style lang="less" scoped>
        li{
            list-style: none;
        }
        .item{
            width: 100%;
            line-height: 40px;
            padding: 5px 0;
            border-bottom: 1px dashed #ccc;
            cursor: pointer;
        }
        .item:hover{
            background-color:#eee
        }
        /* 添加的过度样式 */
        .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
        }
        .fade-enter, .fade-leave-to{
            opacity: 0;
        }
</style>