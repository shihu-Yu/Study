import React ,{ Component } from 'react'
// 引入UI组件
import UI from'./UI'
import {connect} from 'react-redux'
import { actionCreator } from './store'
class Nav extends Component{
    constructor(props){
        super(props)
    }
        
    render(){ 
        const { name } = this.props
        return(
            // 挂载UI组件 并且传输数据   
           <UI 
            name={name}
           />
        )
    }
}
/**
 * 映射属性
 * 该函数是connect的第一个参数
 * 该函数传入的第一个参数是state
 * 该函数返回的是一个对象，返回对象上的属性会被映射到组件的props上
 *  
 */ 
const mapStateToProps = (state) => ({name: state.get('nav').get('name')})
/**
 * 映射方法
 * 该函数是connect的第二个参数，
 * 该函数传入的第一个参数是dispatch方法
 * 该函数返回的是一个对象，这个对象上的方法会被映射到组件的props上
 */ 
const mapDispatchToProps = (dispatch) => ({})

/**
 * Connect方法:connect主要是为了让组件和store建立连接起来
 * connect方法返回一个方法，这个方法接受一个组件，这个返回的方法的执行结果一个和store建立连接的组件
 * 第一个参数是映射属性函数 
 * 第二个参数是映射方法函数
 */
export default connect(mapStateToProps,mapDispatchToProps)(Nav)