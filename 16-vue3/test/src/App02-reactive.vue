<template>
    <div class="app">
        <button @click="add">点击了{{count.value}}次</button>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    name: 'App',
    setup(){
        // 使用relative方法把数组或者对象初始化响应式数据
        let count = reactive({value:0}) // 返回的是一个proxy实例

        const add = ()=>{
            count.value += 1
        }

        // 使用reactive把相应的数据 return 返回出去
        return {count,add}
    }
}
</script>
