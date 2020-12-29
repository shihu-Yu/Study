<template>
    <div class="todolist">
        <transition-group  class="list" tag='ul' name="fade" appear>
            <!-- <li 
                class="item"
                v-for="item in this.$store.state.list"
                :key="item.id"
                @click="delItem(item.id)"
            > -->
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
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    name:'List',
    computed:{
        // 使用mapState方法把state数据映射到当前组件计算属性中
        // ...mapState(['list']),
        // 与上面的效果相同,只不过这种写法可以改变list的名称
        ...mapState({
            list:state=>state.todolist.list
        }),

        // 使用mapGetters将getters映射到计算属性之中
        // ...mapGetters(['total'])
        // 另一种写法
        ...mapGetters({
            total:'total'
        })
    },
    methods:{
        // 使用mapMutations将组件中的 methods 映射为 store.commit 调用

        // ...mapMutations(['delItem'])
        // 另一种写法
        ...mapMutations({
            delItem:'delItem'
        })


        // 当不需要异步处理数据时 可以在当前组件直接 commit(type,payload) 
        /*
        delItem(id){
            // 直接在$store上拿到commit
            this.$store.commit('delItem',id)
        }
        */
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