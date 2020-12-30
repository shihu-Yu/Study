<template>
    <div class="app">
        <p> {{obj3.name}} </p>
        <button @click="update">更改</button>
    </div>
</template>

<script>
import {reactive,ref} from 'vue'
import {toRaw} from 'vue'
export default {
    name: 'App',
    setup(){
        const obj1 = reactive({name:'lilei'})
        const obj2 = toRaw(obj1)
        const obj3 = ref({name:'tom'})
        const obj4 = toRaw(obj3)
        const update = ()=>{
            // obj1.name = '李雷'
            // obj2.name = '李雷'
            obj3.name = '李雷'
            console.log(obj2)//toRaw  返回的是普通对象 改变数据时不会改变页面中的内容 只会改变基础数据
            console.log(obj3)//ref  返回的是refimpl包装的对象
            console.log(obj4)//toRaw  返回的是是refimpl包装的对象改变数据时不会改变页面中的内容 只会改变基础数据
        }


        console.log(obj1)//返回的是proxy包装后的对象 
        console.log(obj2)//toRaw  返回的是普通对象
        console.log(obj3)//ref  返回的是refimpl包装的对象
        console.log(obj4)//ref  返回的是refimpl包装的对象
        return {obj1,obj3,update}
    }
    
}
</script>
