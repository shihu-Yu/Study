//定义一个中间件  返回出去的是一个函数
module.exports = ()=>(req,res,next)=>{
        req.requesTime = Date.now()
        next()//改行代码一定要加 使程序可以继续往下走
}