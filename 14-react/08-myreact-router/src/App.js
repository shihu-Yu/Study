
import React ,{ Component } from 'react'
// import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

// import {HashRouter as Router,Route,Switch,Redirect} from './react-router-dom'
import {HashRouter as Router} from './react-router-dom'

class About extends Component{
    render(){
        return(
            <div className="About">
                About Pages
           </div>
        )
    }
}
class Home extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return(
            <div className="Home">
                Home Pages
                {this.props.children}
            </div>
        )
    }
}

class Users extends Component{
    render(){
        return(
            <div className="users">
               users Pages
           </div>
        )
    }
}

class UsersProfile extends Component{
    render(){
        return(
            <div className="UsersProfile">
               Users Profile Pages
           </div>
        )
    }
}
class NotFound extends Component{
    render(){
        return(
            <div className="NotFound">
               <h1>Not Found</h1> 
           </div>
        )
    }
}

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:true//模拟登录状态
        }
        
    } 

    render(){ 
        return(
            <div className="App">
                <Router>
                    {/* <Route exact={true} path="/" component={Home}/>
                    <Route path="/home" component={Home}  />
                    <Route path="/About" component={About}/>
                    <Route path="/Users/profile" component={UsersProfile}/>               
                    <Route path="/Users/:id" component={Users}/> */}
                    <Route path="/home"/>
                </Router>
            </div>
        )
    }
}

export default App