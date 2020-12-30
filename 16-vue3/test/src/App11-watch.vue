<template>
    <div id="app">
        <p>name: {{person.name}}</p>
        <button @click="update">更改</button>
    </div>
</template>

<script>
import {reactive,ref,customRef, computed,watch} from 'vue'
export default {
    name: 'App',
    setup(){
       const person = reactive({name:'tom',age:'20'})
       const update = ()=>{
            person.name = '韩梅梅',
            person.age = '20'
       }
       watch('person.name',(newval,oldval)=>{
           console.log('name has changed...')
       })
       return {person}
    }
}
</script>