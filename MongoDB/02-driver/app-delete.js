const {MongoClient} = require('mongodb')

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri,{ useUnifiedTopology: true })

const dbName = 'shop'

async function run(){
    try{
        //建立数据库的连接
        await client.connect()
        //创建或者获取DB
        const database = client.db(dbName)
        //创建或者获取collection
        const collection = database.collection('user')
        //删除一个数据
        const resultOne = await collection.deleteOne({age:{$gt:10}})
        console.log(resultOne)
    }finally{
        await client.close()
    }
}

run()
.catch(e=>{
    console.log(e)
})