import React ,{ Component } from 'react'
import { Consumer } from './context'

// Link组件的核心是返回一个a标签,但是a标签不会发生页面的真实跳转,而是执行一个函数来改变路由。
class Link extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Consumer>
                {
                    value=>{
                    return(<a onClick={()=>{value.history.push(this.props.to)}}>{this.props.children}</a>)
                    }
                }
            </Consumer>
        
    }
}

export default Link