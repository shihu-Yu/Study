
import React ,{ Component } from 'react'
import axios from 'axios'
import regeneratorRuntime from "regenerator-runtime"
import Item from './Item'
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[],
            task:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(ev){
        this.setState({
            task:ev.target.value
        })
    }
    handleSubmit(){
        const list = [...this.state.list]
        list.push({
            id:Date.now(),
            task:this.state.task
        })
        this.setState({
            list,
            task:''
        })
    }
    handleDel(id){
        const list = this.state.list.filter(item=>item.id != id)
        this.setState({
            list
        })
    }
    async componentDidMount(){
       const result = await axios.get('http://127.0.0.1:3000')
       this.setState({
           list:result.data
       })
    }
    render(){
    // const items = this.state.list.map(item=><li key={item.id} onClick={this.handleDel.bind(this,item.id)} className="item">{item.task}</li>)
    const items = this.state.list.map(item=><Item key={item.id} task={item.task} handleDel={this.handleDel.bind(this,item.id)} />)
        return(
            <div className="App">
                <div  className="head">
                    <input value={this.state.task} onChange={this.handleChange} />
                    <button className="btnSubmit" onClick={this.handleSubmit}>提交</button>
                </div>
                <ul className="list">
                   {items}
                </ul>
            </div>
        )
    }
}

export default App