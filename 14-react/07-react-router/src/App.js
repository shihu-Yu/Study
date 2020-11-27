
import React ,{ Component } from 'react'
import './index.css'
// import {HashRouter as Router,Route} from 'react-router-dom'
import {BrowserRouter as Router,Route,Switch,Redirect,Link,NavLink,useParams} from 'react-router-dom'


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
    render(){
        return(
            <div className="Home">
                Home Pages
           </div>
        )
    }
}

function Users(props){
    const {id} = useParams()
    return(
        <div className="users">
            {/* 处理参数 */}
           {/* users Pages , users id is by props.match:{props.match.params.id}
           users Pages , users id is by useParams: {id} */}
           users Pages
       </div>
    )
}
/*
class Users extends Component{
    render(){
    console.log(this.props)
        return(
            <div className="users">
               users Pages , users id is by {this.props.match.params.id}
           </div>
        )
    }
}
*/
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
    } 
    render(){ 
        return(
            <div className="App">
                <Router>
                    <ul>
                        {/* Link跳转 */}
                        {/* 
                        <li>
                            <Link to='/Home'>首页</Link>
                        </li>
                        <li>
                            <Link to='/About'>关于</Link>
                        </li>
                        <li>
                            <Link to='/Users'>个人中心</Link>
                        </li><li>
                            <Link to='/Users/profile'>个人信息</Link>
                        </li> 
                        */}
                        {/* NavLink导航 相比较于Link可以添加一个class */}
                        <li>
                            <NavLink  activeClassName="selected" to='/Home'>首页</NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName="selected" to='/About'>关于</NavLink>
                        </li>
                        <li>
                            <NavLink  activeClassName="selected" to='/Users/profile'>个人信息</NavLink>
                        </li> 
                        <li>
                            <NavLink  activeClassName="selected" exact to='/Users/123'>个人中心</NavLink>
                        </li>
                    </ul>
                    {/* Switch的作用 用来路由选项,匹配到就不继续匹配 */}
                    <Switch>
                        {/* 方法一 */}
                        {/* 
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>      */}
                        {/* 方法三 */}
                        {/* <Route exact={true} path="/" render={()=><Home />} />
                        <Route path="/home" render={()=><Home />} />
                        <Route path="/About" render={()=><About />} />
                        {//exact完全匹配只有当在浏览器端发送的地址完全一样时才会请求回要请求的页面否则就不能请求回页面 }
                        <Route exact={true} path="/Users" render={()=><Users />} /> */}

                        {/* 方法二 */}
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/Home" component={Home}/>
                        <Route path="/About" component={About}/>
                        {/* 当请求到/Users/project这个地址时 会加载这个界面 但是请求完之后浏览器不会停止会用当前的路径
                        继续进行匹配 因此Users页面也会被请求回来 这时候需要引入Switch用来路由选项,匹配到就不继续匹配
                        使其匹配到/Users/project之后就不再向下匹配发送请求
                        */}
                        <Route path="/Users/profile" component={UsersProfile}/>
                        {/* 当路由接收参数时 下面的父元素要放在/Users/profile 这个路由下面否则会报错*/}
                        {/* <Route path="/Users/:id" component={Users}/> */}

                        {/* 处理参数的方法三 */}
                        <Route path="/Users/:id" render={()=>( <Users />)}  />

                        {/* 我们还可以用path="*"的Route来匹配任意路由,不过这个Route需要放到Switch的最后一个  */}
                        {/* <Route path="*" component={NotFound}/> */}
                        <Route path="/notfound" component={NotFound}/>
                        {/*们可以用来处理如果所有的路由都匹配不到时跳转到某个页面.  */}
                        <Redirect to='/notfound'/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App