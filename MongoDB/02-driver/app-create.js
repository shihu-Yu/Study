const {MongoClient} = require('mongodb')

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri,{ useUnifiedTopology: true })

const dbName = 'shop'

async function run(){
    try{
        //建立和数据库的连接
        await client.connect()
        //创建或者获取DB,如果数据库中有该DB则直接返回该对应DB的对象，如果没有则创建该DB然后返回该DB所对应的对象
        const database = client.db(dbName)
        //创建或者获取集合，若果数据库中又该集合则直接返回对应的该集合的对象，如果没有则创建该集合然后返回对应的对象
        const collection = database.collection('user')
        //插入数据
        const result = await collection.insertMany([{name:"李雷",age:20,score:80},{name:"韩梅梅",age:20,score:90}])

        console.log(result)
    }finally{
        //关闭与数据库的连接
        await client.close()
    }
}
run()
.catch(e=>{
    console.log(e)
})