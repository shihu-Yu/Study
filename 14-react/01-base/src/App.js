// 定义组件
// import React from 'react'
import React ,{ Component ,Fragment} from 'react'
import UserInfo from './UserInfo'


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

// 绑定事件   受控组件

// class App extends Component{
//     // 获取输入框内容添加的代码
//     constructor(props){
//         super(props)
//         this.state = {
//             content:'ccc'
//         }

        //事件的另一种写法这样写下边使用使 就不需要再bind
        /*
            this.handleAdd = this.handleAdd.bind(this)
        /*

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


// 受控组件

// class App extends Component{
//     constructor(props){
//         super(props)
//     }
//     handleChange(){
//         console.log(this.input.value)
//     }

//     render(){
//         return(
//             <div>
//                 {/* 通过ref组件属性把当前的DOM节点绑定在组件上 */}
//                 <input ref={input=>{this.input=input}} onChange={this.handleChange.bind(this)}/>
//             </div>  
//         )
          
//     }

// }





// 父组件给子组件传递元素
//引入子组件

// import UserInfo from './UserInfo.js'

// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state = ({
//             age:18
//         })
//     }
//     // 定义一个方法传递给子组件 ，使子组件可以通过这个方法来改变父组件传递过去的数据
//     handleAddAge(age){
//         this.setState({
//             // age : age
//             age : 20,
//             tips:'haha'
//         })
//     }
//     render(){
//         console.log('APP Component render...')
//         return(
//             <div className="App" >
//                 {this.state.tips}
//                 {/* 插入子组件  同时把父组件的属性和方法传递给子组件*/}
//                 <UserInfo name="李雷" age={this.state.age} city="海口"  handleAddAge = {this.handleAddAge.bind(this)} />
//                 {/* 验证的props发生改变后render函数会重新执行 */}
//                 <button onClick={()=>{this.setState({age:25})}}>更改父组件的state来更改子组件的props</button>
//                 {/*验证当父组件的render函数执行时,子组件的render函数也会被执行 */}                 
//                 <p><button onClick={() => { this.setState({ tips: '你好' }) }}>更改父组件的state让父组件render</button></p> 
//             </div>
            
//         )  
//     }
// }


// 条件渲染
// class App extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             islogin:false
//         }
//     }
//     render(){
//         const islogin = this.state.islogin
//         // 方法一 使用 if 条件语句
//         /*
//         let button 
//         if(islogin){
//             button = <button>退出</button>
//         }else{
//             button = <button>登陆</button>
//         }
//         return(
//             <div className="APP">
//                 {button}
//             </div>
//         )
//         */

//         // 方法二 使用三目运算
//         return(
//             <div className="APP">
//                 {
//                     islogin 
//                     ? <button>退出</button> 
//                     : <button>登陆</button>
//                 }
//             </div>
//         )
//     }
// }

// 列表渲染
/*
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const User = [
            {
                id:1,
                name:"韩梅梅",
                age:20
            },
            {
                id:2,
                name:"李雷",
                age:25
            }
        ]
        const item = User.map((User)=>(
// key={User.id} 这行代码一定要写 否则会看到Warning: Each child in a list should have a unique "key" prop.这样的警告
        <li key={User.id}> id: {User.id }   name: {User.name}   age: {User.age} </li>))
        return(
            <div className="App">
                <ul>
                    {item}
                </ul>
            </div>
        )
    }
}
*/

//  生命周期 生命周期函数是指在某个时刻组件会自动执行的函数   
// 

class App extends Component{
    constructor(props){
        super(props),
        this.state = {
            isAlive:true
        },
        this.handleDel = this.handleDel.bind(this)
    }
    handleDel(){
        this.setState({
            isAlive:false
        })
    }
    render(){
        console.log('App render ...')
        return(
            <div className="APP">
                <div>
                    {/* 生命周期 */}
                    {this.state.isAlive ? <UserInfo name="韩梅梅" age={18} /> : null}
                    {/* 验证组件的state 发生改变 render函数会重新渲染 */}
                    {/* <p><button onClick={()=>{this.setState({major:'history'})}}>更改子组件的state</button></p> */}

                    {/*  卸载时的生命周期 */}
                    <p><button onClick={this.handleDel}>卸载组件</button></p>
                </div>
            </div>
        )
    }
}



export default App