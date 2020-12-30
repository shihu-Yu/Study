<template>
    <div class="app">
        <button @click="add">点击了{{count}}次</button>
    </div>
</template>

<script>
import {reactive,ref,customRef} from 'vue'

 function myRef(value){
     let timer
    return customRef((track,trigger)=>{
        return{
            get(){
                track()
                console.log(value)
                return value
            },
            set(newValue){
                clearTimeout(timer)
                timer = setTimeout(() => {
                    trigger()
                    value = newValue
                    return value
                },200);
            },
        }
    })
}

export default {
    name: 'App',
    setup(){
        // const count = ref(0)
        const count = myRef(0)
        const add = ()=>{
            return count.value++
        }
        return{count,add}
    }
    
}
</script>
