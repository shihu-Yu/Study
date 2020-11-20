import React ,{Component} from 'react'
import PropTypes from 'prop-types'

class UserInfo extends Component{
    //  生命周期 生命周期函数是指在某个时刻组件会自动执行的函数   
   // 挂载 更新
      // 	初始化组件的数据
    constructor(props){
        super(props)
        this.state = {
            major:'math',
            score:0
        }   
    }
    // 多用于如果props有变化,需要更新state的场景,该方法返回state的更新 该方法不管在什么位置都比render()方法要早运行
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('UserInfo getDerivedStateFromProps ....')
        console.log(nextProps,prevState)
        // 使用return 返回state更新的数据 然后和上面的数据进行合并
        // return null // 返回null代表没有更新或者不更新

        // 返回的state更新 回合上面原来的state数据进行合并
        return {
            tips:"明天你好",
            age:20
        }
    }
    /*render 方法之前 getDerivedStateFromProps方法之后执行 根据 props 或 state的值决定组件的渲染,一般用来阻止不必要的页面渲染 
    该方法返回布尔值,根据返回的布尔值决定是否执行后续的生命周期函数
    */
    shouldComponentUpdate(nextProps, nextState){
        console.log('UserIndo shouldComponentUpdate(nextProps, nextState):' ,nextProps, nextState)
        //模拟一个条件:成绩如果是40就不更新
        if(nextState.score == 40){
            return false
        }else{
           return true
        }
    }
    /* 获取DOM发生更改之前的信息  该方法必须要与componentDidUpdate方法一起使用 该方法的任何返回值将作为参数传递给 
    componentDidUpdate()  该方法在 render 执行完之后才会执行*/
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UserInfo getSnapshotBeforeUpdate(prevProps, prevState):',prevProps, prevState)
        //必须返回一个对象或者null 否则会报错
        // return null
        return {
            snapshot: 'this is snapshot data before update'
        }
    }
    /* 更新后会立即别调用  对更新后的DOM进行操作,根据更新前后的的数据比较来决定是否发送网络请求 第三个参数是
    getSnapshotBeforeUpdate()函数的返回值*/ 
    componentDidUpdate(prevProps, prevState,snapshot){
        console.log('UserInfo componentDidUpdate(prevProps, prevState,snapshot):',prevProps, prevState,snapshot)
    }
    //组件挂载完毕执行,多用于发送ajax获取数据 该方法只有再render()方法执行完之后 才运行
    componentDidMount(){
        console.log('UserInfo componentDidMount...')
    }

    /*卸载时的 生命周期组件卸载及销毁之前直接调用	执行必要的清理操作(例如,清除定时器,取消网络请求等	组件实例卸载后，
    将永远不会再挂载它*/ 
    componentWillUnmount(){
        console.log('UserInfo componentWillUnmount()')
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
                <p>成绩: {this.state.score}</p>
                <p>{this.state.tips}</p>
                {/* 子组件想要修改父组件传递过来的数据 不能直接修改 需要使用通过父组件传递过来的相应的方法 */}
                {/* 调用从父组件传递过来的方法来该改变相应的数据 */}
                {/* <p><button onClick={()=>{handleAddAge(parseInt(Math.random()*100))}}>修改年龄</button></p>  */}
                  
                {/*模拟更新时的生命周期操作  */}
                <p><button onClick={()=>{this.setState({score:this.state.score+10})}}>更改子组件的state</button></p>   

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