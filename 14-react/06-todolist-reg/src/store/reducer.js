import { combineReducers } from 'redux-immutable'


import {reducer as todolist} from '../pages/todolist/store'
import { reducer as nav }  from '../pages/nav/store'

//合并所有组件的reduer
export default combineReducers({
    todolist,
    nav
})