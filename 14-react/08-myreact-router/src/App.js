
import React ,{ Component } from 'react'
// import {HashRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

// import {HashRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom'
import {HashRouter as Router,Route,Link} from './react-router-dom'

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
        console.log(this.props)
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

                    <Link to="/home">首页</Link>&nbsp;
                    <Link to="/about">关于</Link>&nbsp;
                    <Link to="/users/profile">用户配置</Link>&nbsp;
                    <Link to="/users/:id">用户中心</Link>&nbsp;

                    <Route exact={true} path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/users/:id" component={Users}/>
                </Router>
            </div>
        )
    }
}

export default App