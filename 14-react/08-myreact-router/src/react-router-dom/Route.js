import React ,{ Component } from 'react'
import { Consumer } from './context'
// 引入处理正则的插件
const { pathToRegexp } = require("path-to-regexp");

class Route extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Consumer>
                {
                    value=>{

                        // 这里的path是从App.js中Route定义的通过props传递过来的参数
                        const {path,component:Component,exact=false} = this.props
                        // 这里的pathname是从HashRouter中传递过来前端浏览器地址栏的pathname
                        const pathname = value.location.pathname
                        // 通过插件来生成正则进行匹配
                        const pathnames = [];
                        // 生成正则
                        const reg = pathToRegexp(path, pathnames, { end: exact })
                        // 使用正则上match方法进行匹配 如果有返回一个数组 否则返回null
                        const result = pathname.match(reg)
                        // 如果result不是null就代表匹配成功  并且返回插件
                        
                        if(result){
                            // 处理参数
                            // 根据地址栏中的信息生成所需要的参数名称
                            const names = pathnames.map(item=>item.name)
                            // 根据匹配结果生成参数值
                            const [url,...values] = result
                            const params = {}
                            names.forEach((name,index)=>{
                                params[name] = values[index]
                            })
                            const props = {
                                location:value.location,
                                match:{
                                    isExact:exact,
                                    params,
                                    url,
                                    path
                                }
                            }
                            return <Component {...props} />
                        }
                        return null
                    } 
                }
            </Consumer>
        
    }
}

export default Route