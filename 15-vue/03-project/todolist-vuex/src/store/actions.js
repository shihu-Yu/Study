
import axios from 'axios'

const actions = {
    async loadItem({commit}){//使用结构赋值来解析传递过来的对象 获取commit
        // 异步发送请求
        const result = await axios.get('http://127.0.0.1:3000')
        // commit(type,payload)
        commit('loadItem',result.data)
    }
}

export default actions