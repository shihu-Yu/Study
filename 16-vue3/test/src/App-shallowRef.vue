<template>
    <div class="app">
        <!-- <button @click="add">点击了{{count.value}}次</button> -->
    </div>
</template>

<script>
import {ref} from 'vue'
import {shallowRef} from 'vue'
export default {
    name: 'App',
    setup(){
        // 使用relative方法把数组或者对象初始化响应式数据
        // let count = ref(
        let count = shallowRef(
            {
                value:{
                    value:'l1',
                    father:{
                        value:'l2',
                        son:{
                            value:'l3'
                        }
                    }
                }
            }
        ) 
        console.log(count)//返回的时RefImpl 实例对象
        console.log(count.value)//返回的时proxy实例对象 || 当是shallowRef方法时返回的是普通对象
        console.log(count.value.value.father)//返回的时proxy实例对象  || 当是shallowRef方法时返回的是普通对象
        console.log(count.value.value.father.son)//返回的时proxy实例对象 || 当是shallowRef方法时返回的是普通对象
       

        return {count}
    }
}
</script>
