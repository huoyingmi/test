// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

//将UserModel引入
const UserModel = require('./models/user.js');


// 随机函数 构建数据时使用
const getRandom = (min,max)=>{
    return Math.round(min + (max-min) * Math.random());
}

// 定义人名的数组
const names = ["Tom","Peter","Amy","Mike","Jack","Leo","Lucy","Andy"];
// 定义科目的数组
const majors = ["computer","art","sport","music","chinese"];

// 定义得到name随机数的方法
const getName = ()=> names[getRandom(0,names.length-1)];
// 定义得到major随机数的方法
const getMajor = ()=> majors[getRandom(0,majors.length-1)];


// 1.mongoose对象的connect方法连接到数据库中
mongoose.connect('mongodb://localhost/huoyingmi', {useNewUrlParser: true});

// 用监听事件判断是否成功
// 1-1.首先拿到mongoose对象的connection
const db = mongoose.connection;

// 1-2.监听事件1
db.on('error',(err)=>{
	console.log('connection error');
	throw err;
});

// 1-3.监听事件2
db.on('open',()=>{
	console.log('connection successful');

	// 2.用数据操作模型(CRUD)
	// 2-1.插入数据操作

    // 2-2.查询数据操作
    
    // 2-3.更新数据操作
    
    // 2-4.删除数据操作
   
    // 2-5.去处重复值
    UserModel.distinct("name",{age:{$gt:100}},(err,result)=>{
        if(err){
            console.log("distinct user err::",err);
        }else{
            console.log(result);
        }
    })
    /*
    UserModel.distinct("name",{age:{$gte:100}},(err,result)=>{
        if(err){
            console.log("distinct user err::",err);
        }else{
            console.log(result);
        }
    })
    */
});