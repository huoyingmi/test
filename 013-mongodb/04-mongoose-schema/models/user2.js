
const mongoose = require('mongoose');

//将BlogModel引入
const BlogModel = require('./blog.js');

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
        required:[true,'用户名称必须输入'],
        maxlength:[5,'最多5个字符'],
        minlength:[3,'最少3个字符']
    },  //字符串
    age: {
    	type: Number,
    	default:0,
        max:[150,'最大年龄是150岁'],
        min:[10,'最小年龄是10岁']
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
    },
    phone: {
        type: String,
        validate:{
            validator:function(val){
                return /1[358]\d{9}/.test(val)
            },
            message:'{VALUE}不是合法的手机号码'
        }
    }
});

//定义实例方法
UserSchema.methods.findBlogs = function(callback){
    // console.log(this);
    // console.log(this.model('blog'));
    this.model('blog').find({author:this._id},callback);
}

// 定义静态方法
UserSchema.statics.findByPhone = function(val,callback){
   // console.log(val);
    //console.log(this); //this是UserModel
    console.log(this.model('user') === this);
    this.findOne({phone:val},callback)
}

// 2.生成模型Model
// 2-1.mongoose.model方法的第一个参数是指定的集合名称，mongoose会自动生成复数
// 2-2.mongoose.model方法的第二个参数是定义的Schema名称
const UserModel = mongoose.model('user', UserSchema);

//3.导出
module.exports = UserModel;