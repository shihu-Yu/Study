<template>
    <div class="app">
        <button @click="add">点击了{{count}}次</button>
        <div>
            <input type="text" >
            <!-- <p>firstName:{{firstName}}</p>
            <p>lastName:{{lastName}}</p> -->
        </div>
    </div>
</template>

<script>
import {reactive,ref,customRef, computed} from 'vue'

export default {
    name: 'App',
    setup(){
        const count = ref(0)
        const add = computed(()=>count.value + 1)
        return{count,add}
    }
    
}
</script>
