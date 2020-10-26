const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop', { useNewUrlParser: true, useUnifiedTopology: true  })

const db = mongoose.connection

//连接失败，弹出错误终止程序

db.on('error',()=>{
    throw new Error('DB err')
})

//连接成功，程序正常进行
db.once('open', ()=>{
    console.log('DB connect ')
    //定义一个Schema ，Schema主要是定义文档结构
    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })
    //根据Schema生成一个模型,模型是一个构造函数
    //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
    //2.2 model方法第二个参数指定Schema
    const User = mongoose.model('user',userSchema)
    
    //3.使用模型或者模型对象进行文档的操作
    //新增文档
    const user = new User({
        name:'lilei',
        age:21,
        score:90
    })
    //使用回调函数
    user.save((error,result)=>{
        if(error){
            console.log(error)
        }else{
            console.log(result)
        }
    })
})