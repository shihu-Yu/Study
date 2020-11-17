import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class UserInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // 利用结构赋值简化
        const {name,age,city} = this.props
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