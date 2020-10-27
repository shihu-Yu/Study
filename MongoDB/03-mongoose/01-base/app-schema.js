const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

const User = require('./models/user.js')

db.on("error",()=>{
    throw new Error('DB error')
})

db.once('open',async ()=>{
    console.log("DB create")
    try{
        const result = await User.insertMany({})

        console.log(result)
    }catch(e){
        console.log(e)
    }

})