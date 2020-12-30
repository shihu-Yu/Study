<template>
    <div class="app">
        <button @click="add">点击了{{count}}次</button>
        <p>
            <input type="text" >
        </p>
    </div>
</template>

<script>
import {reactive,ref,customRef, computed} from 'vue'

export default {
    name: 'App',
    setup(){
        const count = ref(0)
        
        const add = computed(()=>{count.value ++})
        return{count,add}
    }
    
}
</script>
