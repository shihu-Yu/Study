//更新文件
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

db.on('error',()=>{
    throw new Error('DB error')
})

db.once('open',async ()=>{
    console.log("DB create")

    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })

    const User = new mongoose.model('user',userSchema)

    try{
        //更新数据
        // const result = await User.updateMany({age:{$gt:90}},{score:100})
         //const result = await User.updateMany({ age: { $gt: 150 } }, { score: 100 }, { upsert:true})
        const result = await User.updateOne({ age: { $gt: 95 } }, { score: 150 })
        console.log(result)
    }catch(e){
        console.log(e)
    }
})