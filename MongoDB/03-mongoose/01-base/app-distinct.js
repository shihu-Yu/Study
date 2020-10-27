const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('error',()=>{
    throw new Error('DB error')
})

db.once('open',async()=>{
    console.log('DB create')
    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })

    const User = mongoose.model('user',userSchema)

    try{
        
        // const result = await User.distinct('name',{score:{$gt:50}})//去重找到符合后面相应条件的数据后把前面重复的字段进行去重

        // const result = await User.countDocuments({score:{$gt:70}})//获取符合条件的文档个数
        const result = await User.estimatedDocumentCount()//获取所有文档的个数，该方法不接收条件
        console.log(result)
    }catch(e){
        console.log(e)
    }
})