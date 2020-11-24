
import {LOAD_DATA,CHANGE_DATA,ADD_DATA,DEL_DATA} from './actionTypes'
export const getLoadDataAction = (payload)=>({
    type:LOAD_DATA,
    payload:payload
})
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