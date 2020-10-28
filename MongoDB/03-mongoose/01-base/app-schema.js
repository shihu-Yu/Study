const mongoose = require('mongoose')
const moment = require('moment')
mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection
//引入user
const User = require('./models/user.js')
//引入article
const Article = require('./models/article.js')

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
            adress:'hangzhou',
            Date:Date.now,
            friends:['lilei','hanmeimei'],
            major:'history',
            phone:13512344321
        })
        */
        /*
        const result = await Article.insertMany({
            tittle:'明天你好',
            content:'lalala',
            autor:'5f98b262e8447404f88b32ea'
        })
        */
       //格式化时间 方法一 使用date对象的tolocalString方法
       /*
        const result = await User.findById('5f97dbec29e7541a786277c6')
        const date = new Date(result.createdAt)
        console.log(date.toLocaleString())
        */

        // 格式化时间 方法二 引用第三方库 
        // const result = await User.findById('5f98b262e8447404f88b32ea')
        // console.log(moment(result.createdAt).format('YYYY-MM-DD HH:mm:ss'))
         // console.log(result)
        //调用自定义的实例方法
        /*
        const user1 = await User.findById('5f98b262e8447404f88b32ea')
        const blogs = await user1.findMyBlogs()
        console.log(blogs)

        //调用自定义的静态方法
        const user2 = await User.findByPhone('13512344321')
        console.log(user2)
        */
        
        //需求: 已知文章的ID,需要显示文章的内容和作者的信息
        //常规方法
        /*
        const article = await Article.findById('5f98b5fd0831f11d403ee8ae')
        const user = await User.findById(article.autor)
        const result = {
            _id:article._id,
            tittle:article.tittle,
            content:article.content,
            autor:user
        }
        console.log(result)
        */

        //使用关联方法 populate 查询
        /*
        //populate后面的第二个参数 表示显示那些字段
        const result = await Article.findById('5f98b5fd0831f11d403ee8ae').populate('autor'，'name  -_id')
        console.log(result)
        */

         //方法三:把populate关联查询的方法封装成一个静态方法
        const result = await Article.findArticles({_id:'5f98b5fd0831f11d403ee8ae'})
        console.log(result)

    }catch(e){
        console.log(e)
    }

})