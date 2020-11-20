// 测试文件
import React from 'react'
import ReactDom from 'react-dom'
import icon from './1.jpg'

//ES6模块化 引入模块
// import {a} from './moudleA'
// console.log(a)

//写法三 导出时使用as重命名变量名
// import {b} from './moudleA'
// console.log(b)

//写法四 在使用import引入时 使用 as关键字 来重新命名变量名
// import {a as b} from './moudleA'
// console.log(b)

// 写法五 引入默认输出 在引入是 a 的名字可以随意命名(只要是合法名称就可以) 而且不一定要加 {}
// import a from './moudleA'
// console.log(a)

//jsx语法 
const name = '良辰'
// 在js中使用html,遇到 HTML 标签（以 < 开头）,就用 HTML 规则解析; 遇到代码块（以 { 开头）,就用 JavaScript 规则解析.

// const element = (   //添加行内样式 以及添加class 当添加class时只能使用 className
//                     <h1 style={{color:"green"}} className="box"> 
//                         {/* 这也是一条注释*/}
//                         {
//                             //添加注释 要写在html标间之中 同时要用{}括起来

//                             // 这里买也可以使用函数运算
//                         }
//                         hello {name} ，I am {15 + 5} years old
//                     </h1>
//                 )

// 单标签
// const element = <img src= {icon} />
// ReactDom.render(element,document.getElementById('root'))

// 引入组件
// const elem = (
//     <div className="App">
//         <ul className="List">
//             <li>item</li>
//         </ul>
//     </div>
// )

// console.log(elem)
import App from './App.js'

ReactDom.render(<App />,document.getElementById('root'))
