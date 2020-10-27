const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    score:Number
})

const User = mongoose.model('user',userSchema)

module.exports = User