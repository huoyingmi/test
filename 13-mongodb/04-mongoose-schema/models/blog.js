
const mongoose = require('mongoose');

// 1.定义Schema,Schema是数据结构类型
/*
const UserSchema = new mongoose.Schema({
   name: String,  //字符串
   age:Number,
   major:String
});
*/
const BlogSchema = new mongoose.Schema({
    title: {
   	    type: String,
   	    default:''
    },
    content: {
        type: String,
        default:''
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
});

// 静态方法
BlogSchema.statics.findBlog = function(query){
   return this.findOne(query)
   .populate("author","-_id");
}

// 2.生成模型Model
// 2-1.mongoose.model方法的第一个参数是指定的集合名称，mongoose会自动生成复数
// 2-2.mongoose.model方法的第二个参数是定义的Schema名称
const BlogModel = mongoose.model('blog', BlogSchema);

//3.导出
module.exports = BlogModel;