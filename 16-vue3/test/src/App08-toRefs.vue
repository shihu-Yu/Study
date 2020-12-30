<template>
    <div class="app">
        <p> {{name}} </p>
        <p> {{age}} </p>
        <button @click="update">更改</button>
    </div>
</template>

<script>
import {reactive,ref, toRefs,toRef} from 'vue'
export default {
    name: 'App',
    setup(){
        const obj1 = reactive({name:'李雷',age:19})
        const obj2 = toRefs(obj1,)

        const obj3 = {name:'李雷',age:19}
        const obj4 = toRefs(obj3)
        const update = ()=>{
            
            // obj2.name = '韩梅梅'
            // obj2.age = 25
            
            obj4.name= '韩梅梅'
            obj2.age = 25
           console.log(obj4)
        }


      
      
        // return {update,...obj2}
        return {update,...obj4}
    }
    
}
</script>
