import React ,{ Component } from 'react'
import { Consumer } from './context'
// 引入处理正则的插件
const { pathToRegexp } = require("path-to-regexp");

class Switch extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Consumer>
                {
                    value=>{
                        const children = this.props.children
                        const pathname = value.location.pathname

                        for(let i = 0,len=children.length;i<len;i++){
                            const child = children[i]
                            const {path="",exact=false} = child.props
                             // 通过插件来生成正则进行匹配
                            const pathnames = [];
                            // 生成正则
                            const reg = pathToRegexp(path, pathnames,{ end: exact })
                            // 使用正则上match方法进行匹配 如果有返回一个数组 否则返回null
                            const result = pathname.match(reg)
                            // 如果result不是null就代表匹配成功  并且返回插件
                            if(result){
                                return child
                            }
                        }  
                        return null 
                    }    
                }
            </Consumer>
        
    }
}

export default Switch