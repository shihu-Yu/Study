const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/shop',{useNewUrlParser:true})

const db = mongoose.connection

db.on('error',()=>{
    throw new Error('DB err')
})

db.once('open',async ()=>{
    console.log('db create')

    const userSchema = new mongoose.Schema({
        name:String,
        age:Number,
        score:Number
    })

    const User = mongoose.model('user',userSchema)

    try{
        //使用Model.prototype.save()
        /*
        const user = new User({
            name:'xiaoming',
            age:15,
            score:50
        })
        const result = await user.save()
        */

        //使用Model.insertMany()
        // Model.insertMany(array)
        /*
        const result =  await User.insertMany([
            {
                name:'xiaohong',
                age:20,
                score:65
            },
            {
                name:'guodandan',
                age:21,
                score:100
            }
        ])
        */
        //Model.insertMany(object)
        /*
        const result = await User.insertMany({name:'Andy',age:12,score:100})
        */

        // Model.create(array)
        /*
        const result = await User.create([
            {
                name:'xiaogang',
                age:20,
                score:65
            },
            {
                name:'xiaoling',
                age:21,
                score:100
            }
        ])
        */

        //Model.create(object)
        const result = await User.create({ name: 'Andy', age: 12, score: 100 })
        console.log(result)
    }catch(e){
        console.log(e)
    }
    
})