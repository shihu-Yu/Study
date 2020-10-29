//模拟express中间件的方法

const http = require('http')


const express = ()=>{
    //创建一个数组，来存放推入进来的函数
    const fns = []
    const app = (req,res)=>{
        let i = 0
        function next(){
           let fn = fns[i++]
           if(!fn) return
           fn(req,res,next)
        }
        next()
    }
    app.use = (fn)=>{
        //把传入的函数推入到数组里面
        fns.push(fn)
    } 
    return app

}

const app = express()


app.use((req,res,next)=>{
    console.log("A1")
    next()
    console.log('A2')
})
app.use((req,res,next)=>{
    console.log("B1")
    next()
    console.log('B2')
})
app.use((req,res,next)=>{
    console.log("C1")
    next()
    console.log('C2')
})

app.use((req,res,next)=>{
    res.end('ok')
})

const server = http.createServer(app)

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is running at http://127.0.0.1:3000')
})
