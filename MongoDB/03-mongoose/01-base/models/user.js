const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        max:[100,'年龄最大为一百']
    },
    adress:{
        type:String,
        default:'SH'
    },
    score:{
        type:Number,
        max:[150,'成绩最大为150'],
        min:[10,'成绩最小为10'],
        required:[true,"必须添加成绩"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    isLock:{
        type:Boolean,
        default:false
    },
    friends:{
        type:Array,
        default:[]
    },
    major:{
        type:Array,
        default:'computer'
    }
})

const User = mongoose.model('user',userSchema)

module.exports = User