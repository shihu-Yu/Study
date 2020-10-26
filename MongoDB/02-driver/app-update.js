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
        //更新一个数据数据
        // const resultOne = await collection.updateOne({score:{$gt:60}},{$inc:{age:20}})
        // console.log(resultOne)

        //更新多个数据数据
        const resultMany = await collection.updateMany({score:{$gt:60}},{$inc:{age:10}})
        console.log(resultMany)


    }finally{
        //关闭与数据库的连接
        await client.close()
    }
}
run()
.catch(e=>{
    console.log(e)
})