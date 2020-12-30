<template>
    <div class="app">
        {{msg}}
    </div>
</template>

<script>

export default {
    name: 'App',
    beforeCreate(){
        console.log('beforeCreate..')
    },
    created(){
        console.log('created....')
    },
    data(){
        return{
        msg:'heihei'

        }
    },
    setup(props,context){
        console.log(this)//undefined
        console.log(props,context)//
    }
}
</script>
