// 定义组件
// import React from 'react'
import React ,{ Component ,Fragment} from 'react'


// 方法一定义组件 使用函数
/*
function App(props){
    return(
        <div>
            <h1>方法一 定义组件</h1>
        </div>
    )
}
*/

//方法二 定义组件 定义一个类
/*
class App extends Component{//改行代码页可以写成 class App extends React.Component
    render(){
        return(
            <div>
                <h1>方法二 定义组件</h1>
            </div>
        )
    }
}
*/
// 由于只能返回一个标签的html 因此下面的代码 不能只写h1和input标签在外部要加上div标签或者用Fragment来代替div 使用Fragment，在渲染时不会渲染该标签 只会渲染其包裹的标签
/*
class App extends Component{//改行代码页可以写成 class App extends React.Component
    render(){
        return(
            <Fragment>
                <h1>方法二 定义组件</h1>
                <input />
            </Fragment>
        )
    }
}
*/

// 绑定事件

// class App extends Component{
//     // 获取输入框内容添加的代码
//     constructor(props){
//         super(props)
//         this.state = {
//             content:'ccc'
//         }
//     }
//     //定义函数
//     handleAdd(){
//         console.log('定义的事件')
//         console.log(this)
//         console.log(this.state.content)
//     }

//     handleChange(ev){
//         // 使用Component上面的setState方法来 把输入的值  赋值给上面this.state中的content
//         /*
//         this.setState({
//             content:ev.target.value
//         })
//         console.log(this.state.content)//因为 setState 可能是异步操作，因此这里打印出来的内容是上次输入框输入的内容而非当前的
//         */
//         //如果想要等到在这里获取到同步的this.state.content的数据 在进行操作时可以使用下面的方法
//         const content = ev.target.value
//         this.setState(()=>({content:content}),//如果想要依据实时更新的this.state.content的数据继续进行操作可以在下一个回调函数中进行
//         ()=>{
//             console.log(this.state.content)
//         })

//     }
//     render(){
//         return(
//             <div>
//                 {/* 获取输入框的数据 */}
//                 <input onChange={this.handleChange.bind(this)} value={this.state.content} />
//                 {/* 方法一  绑定事件时 要使用驼峰命名法 例如下面的onClick 同时使用该种方法时需要使用bind方法来改变this指向 否则事件中的this指向的是undefiend*/}
//                 {/* <button onClick={this.handleAdd.bind(this)}>点击</button> */}
//                 {/* 方法二 绑定事件时使用箭头函数 */}
//                 <button onClick={()=>this.handleAdd()}>点击</button>
//             </div>
//         )
//     }
// }


// 父组件给子组件传递元素
//引入子组件
import UserInfo from './UserInfo.js'

class App extends Component{
    render(){
        return(
            <div className="App" >
                {/* 插入子组件 */}
                <UserInfo name="李雷" age={20} city="海口"/>
            </div>
        )  
    }
}

export default App