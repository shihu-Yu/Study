import React ,{ Component } from 'react'
import Provider from './context'
 
class HashRouter extends Comment{
    constructor(props){
        super(props)
        this.state = {
            location:{
                pathname:window.location.hash
            }
        }
        console.log(location)
    }
    componentDidMount(){
        console.log(this.state.location)
    }
    render(){
        const value = this.state
        return(
            <Provider></Provider>
        )
    }
}

export default HashRouter
