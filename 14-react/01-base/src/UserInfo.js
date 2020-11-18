import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class UserInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            major:'math'
        }   
    }
    render(){
        console.log('UserInfo Component render...')
        // 利用结构赋值简化
        const {name,age,city,handleAddAge} = this.props
        return(
            /* 
            <div className="userInfo">
                <h1>用户信息</h1>
                <p>昵称: {this.props.name}</p>
                <p>年龄: {this.props.age}</p>
            </div>
            */
           //也可以简写成下面这样
            <div className="UserInfo">
                <h1>用户信息</h1>
                <p>昵称: {name}</p>
                <p>年龄: {age}</p>
                <p>城市: {city}</p>
                <p>专业: {this.state.major}</p>
                {/* 子组件想要修改父组件传递过来的数据 不能直接修改 需要使用通过父组件传递过来的相应的方法 */}
                {/* 调用从父组件传递过来的方法来该改变相应的数据 */}
                <p><button onClick={()=>{handleAddAge(parseInt(Math.random()*100))}}>修改年龄</button></p>

                {/* 验证组件的state 发生改变 render函数会重新渲染 */}
                <p><button onClick={()=>{this.setState({major:'history'})}}>更改子组件的state</button></p>
                
            </div>
        )   
    } 
}
//子组件罗列需要被传入的参数 以及 定义校验规则
UserInfo.propTypes = {
    name:PropTypes.string.isRequired,//添加isRequired方法时就必须要传入参数 否则就会报错
    age:PropTypes.number,
    city:PropTypes.string.isRequired //当然如果该参数设置的有默认值 即使添加了isRequired方法也不会报错
} 
// 对罗列的参数设置默认值
UserInfo.defaultProps = {
    city:"杭州"
}
export default UserInfo