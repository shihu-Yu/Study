<template>
    <div class="app">
        <p> {{obj3.name}} </p>
        <p> {{obj3.age}} </p>
        <button @click="update">更改</button>
    </div>
</template>

<script>
import {reactive,ref, toRef} from 'vue'
export default {
    name: 'App',
    setup(){
        const obj1 = reactive({name:'李雷',age:19})
        const obj2 = toRef(obj1,'name')

        const obj3 = {name:'李雷',age:19}
        const obj4 = toRef(obj3)
        const update = ()=>{
            /*
            obj2.name = '韩梅梅'
            obj2.age = 25
            */
            obj4.name= '韩梅梅'
            obj2.age = 25
           console.log(obj4)
        }


      
      
        return {update,obj3,obj1}
    }
    
}
</script>
