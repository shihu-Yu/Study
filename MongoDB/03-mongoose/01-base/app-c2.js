const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true, useUnifiedTopology: true})

const db = mongoose.connection

db.on('error',()=>{
    throw new Error('DB err')
})

db.once('open',()=>{
    console.log('db create')
    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })
    const User = mongoose.model('user',userSchema)

    const user = new User({
        name:'hanmeimei',
        age:25,
        score:99
    })
    //使用promise的方法
    user.save()
    .then((result)=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
})