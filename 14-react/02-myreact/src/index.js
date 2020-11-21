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
/*
function App(props){
    return(
        <div>
            <p>111</p>
        </div>
    )
}
*/
// 类组件

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            num:0
        }
    }
    handleChange(){
        this.setState({
            num:this.state.num + 1
        })
    }
    render(){
        return(
            <div className="App">
                <p>{this.state.num}</p>
                <button onClick={this.handleChange.bind(this)}>点击更改</button>
            </div>
        )
    }
}





ReactDom.render(<App  />,document.getElementById('root'))
