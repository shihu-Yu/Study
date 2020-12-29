<template>
    <div class="app">
        <button @click="add">点击了{{count}}次</button>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'App',
    setup(){
        // 使用ref 把基本数据初始化化为 响应式数据
        let count = ref(0) // 返回的是一个RefImpl
        console.log(count)

        const add = ()=>{
            count.value += 1
        }

        // 使用reactive把相应的数据 return 返回出去
        return {count,add}
    }
}
</script>
