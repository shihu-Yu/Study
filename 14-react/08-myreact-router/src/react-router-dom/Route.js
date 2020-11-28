import React ,{ Component } from 'react'
import { Consumer } from './context'

class Route extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return<Consumer>
                {
                   value=>{
                        console.log(this.props)
                        console.log(value)
                       return null
                   } 
                }

            </Consumer>
        
    }
}

export default Route