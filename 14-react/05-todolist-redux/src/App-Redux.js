
import React ,{ Component } from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
// import Item from './Item'
import {  DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { createStore } from 'redux'
import { Row, Col ,Input,List ,Button} from 'antd';

// 定义一个初始化的state
let defaultState = {list:[],task:""} 
/**
 * 1. reducer是一个纯函数(固定的输入必须是一个固定的输出),保证有固定输出的方法是不要在函数中使用Date.now或者Math.random这些方法生成数据
 * 2. reducer主要是根据上一次的state和最新的action用来处数据
 * 3. reducer必须要返回一个新的state的对象,因为state应该有store来统一管理
 * 4. store根据返回的新的state来更新store里面的state,组件使用getState方法来获取store里面的state
 * 5. action是一个对象,存储了操作类型和必要的参数,必须保证action的类型是唯一的
 */
function reducer(state=defaultState,action) {
        let newState = JSON.parse(JSON.stringify(state))
        if(action.type == 'LOAD-DATA'){//初始化网络加载数据
            newState.list = action.payload
        }
        if(action.type == 'CHANGE-DATA'){//更改input框数据
            newState.task = action.payload
        }
        if(action.type == 'ADD-DATA'){//增加数据
            const item = {
                id:action.id,
                task:newState.task
            }
            newState.list.push(item)
            newState.task = ''
        }
        if(action.type == 'DEL-DATA'){//删除数据
            const list = newState.list.filter(item=>action.payload != item.id)
            newState.list = list
        }
        return newState
}
let store = createStore(reducer)
console.log(store)
class App extends Component{
    constructor(props){
        super(props)
        /*
        this.state = {
            list:[],
            task:''
        }
        */
        this.state = store.getState()
        //更新数据 可以手动订阅更新，也可以事件绑定到视图层。每当数据发生变化时都会调用后面的方法
        store.subscribe(()=>{
            this.setState(store.getState())
        })
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(ev){
        /*
        this.setState({
            task:ev.target.value
        })
        */
       store.dispatch({type:'CHANGE-DATA',payload:ev.target.value})
    }
    handleSubmit(){
        /*
        const list = [...this.state.list]
        list.push({
            id:Date.now(),
            task:this.state.task
        })
        this.setState({
            list,
            task:''
        })
        */
       store.dispatch({type:'ADD-DATA',payload:Date.now()})
    }
    handleDel(id){
        /*
        const list = this.state.list.filter(item=>item.id != id)
        this.setState({
            list
        })
       */ 
      store.dispatch({type:'DEL-DATA',payload:id})
    }
    
    async componentDidMount(){
        /*
       const result = await axios.get('http://127.0.0.1:3000')
       this.setState({
           list:result.data
       })
       */
       const result = await axios.get('http://127.0.0.1:3000')
        //  改变内部state的唯一法 是一个action 后面传递的时从服务器请求回来的数据
       store.dispatch({type:'LOAD-DATA',payload:result.data})

    }
    
    render(){    
        return(   
            <div className="App">
                <Row>
                    <Col span={18}><Input onChange={this.handleChange} value={this.state.task} /></Col>
                    <Col span={6}><Button type="primary" onClick={this.handleSubmit}>提交</Button></Col>
                </Row>
                <List 
                    style={{marginTop:'30px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item=>(
                        <List.Item onClick={this.handleDel.bind(this,item.id)}>
                            {item.task}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default App