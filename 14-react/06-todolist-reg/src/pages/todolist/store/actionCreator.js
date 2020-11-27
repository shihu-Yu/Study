
// import {LOAD_DATA,CHANGE_DATA,ADD_DATA,DEL_DATA} from './actionTypes'
import * as types  from './actionTypes'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"

export const getChangeItemAction = (payload)=>({
    type:types.CHANGE_DATA,
    payload:payload
})
export const getAddItemAction = (payload)=>({
    type:types.ADD_DATA,
    payload:payload
})
export const getDelItemAction = (payload)=>({
    type:types.DEL_DATA,
    payload:payload
})

// 异步处理初始化网络数据
export const getLoadDataAction = ()=>{
    return async function (dispatch){
        const result = await axios.get('http://127.0.0.1:3000')
        dispatch({
            type:types.LOAD_DATA,
            payload:result.data
        })

    } 
}