// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

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
	// 2.定义Schema,Schema是数据结构类型
	const UserSchema = new mongoose.Schema({
	   name: String,  //字符串
	   age:Number,
	   major:String
	});
	// 3.生成模型Model
	// 3-1.mongoose.model方法的第一个参数是指定的集合名称，mongoose会自动生成复数
	// 3-2.mongoose.model方法的第二个参数是定义的Schema名称
	const UserModel = mongoose.model('user', UserSchema);

	// 4.用数据操作模型(CRUD)
	// 4-1.插入数据操作

    // 4-2.查询数据操作
    
    // 4-3.更新数据操作
    
    // 4-4.删除数据操作
    /*
    UserModel.deleteOne({name:"Tom"},(err,result)=>{
        if(err){
            console.log('deleteOne user err::',err);
        }else{
            console.log(result);
        }
    })
    */
    UserModel.deleteMany({name:"Peter"},(err,result)=>{
        if(err){
            console.log('deleteOne user err::',err);
        }else{
            console.log(result);
        }
    })
});