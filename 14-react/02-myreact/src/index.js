//引入react
import React ,{Component} from './react'
import ReactDom from './react-dom'

// const elem = (
//     <div className="App" style="color:green" onClick={()=>{alert(123)}}>
//         <ul className="List">
//             <li>item</li>
//         </ul>
//     </div>
// )
// console.log(elem)

// 函数组件


// function App(props){
//     return(
//         <div>
//             <p>123</p>
//         </div>
//     )
// }


// 类组件

class App extends Component{
    render(){
        return(
            <div>
                <p>123</p>
            </div>
        )
    }
}



ReactDom.render(<App title="App" />,document.getElementById('root'))
