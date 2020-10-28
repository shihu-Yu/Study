const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        max:[100,'年龄最大为一百'],
        required:true
    },
    adress:{
        type:String,
        minlength:5,
        maxlength:20,
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
        type:String,
        enum:['computer','math','history']
    },
    //自定义格式验证
    phone:{
        type:Number,
        validate:{
            validator:function(v){
                return /1[358]\d{9}/.test(v)
            },
            message:'{VALUE}  不是合法电话号码'
        }
    },
})


    //自定义实例方法，
    //这里的函数不能够使用箭头函数，否则this指向会发生变化
    userSchema.methods.findMyBlogs = function(){

    // 这里的的this指向User model的一个实例
        return this.model('article').find({autor:this._id},"-__v")
    }

    //自定义静态方法

    userSchema.statics.findByPhone = function(val){
        return this.findOne({phone:val})
    }



const User = mongoose.model('user',userSchema)

module.exports = User