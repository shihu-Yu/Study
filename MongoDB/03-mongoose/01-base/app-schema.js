const mongoose = require('mongoose')
const moment = require('moment')
mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

const User = require('./models/user.js')

db.on("error",()=>{
    throw new Error('DB error')
})

db.once('open',async ()=>{
    console.log("DB create")
    try{
        /*
        const result = await User.insertMany({
            name:'tom',
            age:20,
            score:130,
            Date:Date.now,
            friends:['lilei','hanmeimei'],
            major:'history'
        })
        */
       //方法一 使用date对象的tolocalString方法
       /*
        const result = await User.findById('5f97dbec29e7541a786277c6')
        const date = new Date(result.createdAt)
        console.log(date.toLocaleString())
        */

        //方法二引用第三方库 
        const result = await User.findById('5f97dbec29e7541a786277c6')
        console.log(moment(result.createdAt).format('YYYY-MM-DD HH:mm:ss'))

        // console.log(result)
    }catch(e){
        console.log(e)
    }

})