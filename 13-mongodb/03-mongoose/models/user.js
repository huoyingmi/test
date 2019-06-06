
const mongoose = require('mongoose');

// 1.定义Schema,Schema是数据结构类型
const UserSchema = new mongoose.Schema({
   name: String,  //字符串
   age:Number,
   major:String
});

// 2.生成模型Model
// 2-1.mongoose.model方法的第一个参数是指定的集合名称，mongoose会自动生成复数
// 2-2.mongoose.model方法的第二个参数是定义的Schema名称
const UserModel = mongoose.model('user', UserSchema);

//3.导出
module.exports = UserModel;