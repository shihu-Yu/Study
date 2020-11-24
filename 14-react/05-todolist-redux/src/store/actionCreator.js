
import {LOAD_DATA,CHANGE_DATA,ADD_DATA,DEL_DATA} from './actionTypes'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"

export const getChangeItemAction = (payload)=>({
    type:CHANGE_DATA,
    payload:payload
})
export const getAddItemAction = (payload)=>({
    type:ADD_DATA,
    payload:payload
})
export const getDelItemAction = (payload)=>({
    type:DEL_DATA,
    payload:payload
})

/*
export const getLoadDataAction = (payload)=>({
    type:LOAD_DATA,
    payload:payload
})
*/
// 异步处理初始化网络数据
export const getLoadDataAction = ()=>{
    return async function (dispatch){
        const result = await axios.get('http://127.0.0.1:3000')
        dispatch({
            type:'LOAD_DATA',
            payload:result.data
        })

    } 
}