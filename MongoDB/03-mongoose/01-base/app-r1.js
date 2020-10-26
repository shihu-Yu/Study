const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection

const getRandom = (max,min)=>{
    return Math.round(min + (max - min ) * Math.random())
}

const nameList = ['Tom','Jack','Lucy','Mike','Andy','Peter','xiaoming','hanmeimei','lilei','Leo','Marry','Bob']
const getName = ()=>nameList[getRandom(0,nameList.length-1)]

db.on('error',()=>{
    throw new Error('DB err')
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
        const arr = []
        for(let i = 0;i<100;i++){
            arr.push({
                name:getName(),
                age:getRandom(1,100),
                score:getRandom(0,100)
            })
        }
        const result = await User.insertMany(arr)
        console.log(result)
    }catch(e){
        console.log(e)
    }
})