const mongoose = require('mongoose')

//生成schema，定义文档的类型和结构
const articleSchema = new mongoose.Schema({
    tittle:String,
    content:String,
    autor:{
        //数据类型为ObjectId
        type:mongoose.Schema.Types.ObjectId,
        //使用populate时必须要添加该属性否则populate方法不会生效  使用关联查询时必须指定查询模型
        ref:'user'
    }
})

//这是一个关联查询的静态方法

articleSchema.statics.findArticles = function(query){
    return this.find(query).populate('autor','name -_id')
}


const Article = mongoose.model('article',articleSchema)

module.exports = Article