import {LOAD_DATA,CHANGE_DATA,ADD_DATA,DEL_DATA} from './actionTypes'
// 定义一个初始化的state
let defaultState = {list:[],task:""} 
/**
 * 1. reducer是一个纯函数(固定的输入必须是一个固定的输出),保证有固定输出的方法是不要在函数中
 * 使用Date.now或者Math.random这些方法生成数据
 * 2. reducer主要是根据上一次的state和最新的action用来处数据
 * 3. reducer必须要返回一个新的state的对象,因为state应该有store来统一管理
 * 4. store根据返回的新的state来更新store里面的state,组件使用getState方法来获取store里面的state
 * 5. action是一个对象,存储了操作类型和必要的参数,必须保证action的类型是唯一的 
 *
 */
 function reducer(state=defaultState,action) {
        let newState = JSON.parse(JSON.stringify(state))
        if(action.type == LOAD_DATA){//初始化网络加载数据
            newState.list = action.payload
        }
        if(action.type == CHANGE_DATA){//更改input框数据
            newState.task = action.payload
        }
        if(action.type == ADD_DATA){//增加数据
            const item = {
                id:action.id,
                task:newState.task
            }
            newState.list.push(item)
            newState.task = ''
        }
        if(action.type == DEL_DATA){//删除数据
            const list = newState.list.filter(item=>action.payload != item.id)
            newState.list = list
        }
        return newState
}
export default reducer