const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

db.on('error',()=>{
    throw new Error('DB error ')
})

db.once('open',async ()=>{
    console.log('DB create')
    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })
    const User = new mongoose.model('user',userSchema)
    //查询
    try{
        // const result = await User.find({score:{$gt:88}})
        // const result = await User.find({score:{$gt:90}},"name age score -_id")//后面跟的字段是指定显示的字段，如果前面加上负号表示不显示该字段的内容
        // const result = await User.find({score:{$gt:90}},"name  score -_id").skip(3)//跳过前面三条数据然后开始寻找
        // const result = await User.find({score:{$gt:90}},"name  score -_id").limit(3)//截取前三条寻找到的数据
        // const result = await User.find({score:{$gt:90}},"name  score -_id").sort({score:-1})//按照成绩降序
        // const result = await User.find({score:{$gt:90}},"name  score -_id").sort({score:-1 , age:1})//成绩相同的情况下按照年龄升序
        // const result = await User.find({score:{$gt:80}},"name  score  age -_id" ,{sort:{score:-1 , age:-1} })

        // const result = await User.find({score:{$gt:80}},"name  score age -_id",{sort:"-score age"})//成绩相同的情况下按照年龄升序

        // const result = await User.findById("5f975dffb5a7250df8ea21e5","name score age -_id")//通过Id查询

        const result = await User.findOne({_id:"5f975dffb5a7250df8ea21cc"}, "-age -__v")
        
        console.log(result)

    }catch(e){
        console.log(e)
    }
})