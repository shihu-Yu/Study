import React ,{ Component } from 'react'
import { Consumer } from './context'

// Redirect组件的核心改变路由让页面重写渲染。
class Redirect extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Consumer>
                {
                    value=>{
                        value.history.push(this.props.to)
                        return null
                    }
                }
            </Consumer>
        
    }
}

export default Redirect