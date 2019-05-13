
const mongoose = require('mongoose');

// 1.定义Schema,Schema是数据结构类型
/*
const UserSchema = new mongoose.Schema({
   name: String,  //字符串
   age:Number,
   major:String
});
*/
const UserSchema = new mongoose.Schema({
    name: {
   	    type: String,
   	    default:''
    },  //字符串
    age: {
    	type: Number,
    	default:0
    },
    major: {
    	type: String,
    	enum:["computer","art","sport","music","chinese"],
    	default:"art"
    },
    locked: {
    	type: Boolean,
    	default:false
    },
    createAt: {
    	type: Date,
    	default:Date.now
    },
    friends: {
    	type: Array
    }
});

// 2.生成模型Model
// 2-1.mongoose.model方法的第一个参数是指定的集合名称，mongoose会自动生成复数
// 2-2.mongoose.model方法的第二个参数是定义的Schema名称
const UserModel = mongoose.model('user', UserSchema);

//3.导出
module.exports = UserModel;