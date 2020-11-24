
import React ,{ Component } from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
// import Item from './Item'
import {  DatePicker } from 'antd';
// 引入UI组件
import AppUI from'./AppUI'

import store  from './store/index'
import { getLoadDataAction,getAddItemAction,getChangeItemAction,getDelItemAction } from './store/actionCreator'




class App extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        //更新数据 可以手动订阅更新，也可以事件绑定到视图层。每当数据发生变化时都会调用后面的方法
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDel = this.handleDel.bind(this)
    }
    handleChange(ev){
       store.dispatch(getChangeItemAction(ev.target.value))
    }
    handleSubmit(){
       store.dispatch(getAddItemAction(Date.now()))
    }
    handleDel(id){
      store.dispatch(getDelItemAction(id))
    }
    
    async componentDidMount(){
       const result = await axios.get('http://127.0.0.1:3000')
        //  改变内部state的唯一法 是一个action 后面传递的时从服务器请求回来的数据
       store.dispatch(getLoadDataAction(result.data))
    }
    
    render(){    
        return(
            // 挂载UI组件 并且传输数据   
           <AppUI 
            task={this.state.task}
            list={this.state.list}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleDel={this.handleDel}
           />
        )
    }
}

export default App