// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

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
	/*
	// 4-1.插入数据操作
	const user = new UserModel({name:"Amy",age:50,major:"art"});
    //调用save方法插入数据,接收回调函数
    user.save((err,doc)=>{
    	if(err){
    		console.log('save err::',err);
    	}else{
    		console.log(doc);
    	}
    })
    */
    /*
    // 4-2.查找数据
    UserModel.find({},(err,docs)=>{
    	if(err){
    		console.log('find user err::',err);
    	}else{
    		console.log(docs);
    	}
    })
    */
    
    //4-3.更新数据
    /*
// DeprecationWarning: collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead
      //update将要被废弃，不推荐使用 
    UserModel.update({name:"Tom"},{$set:{age:88}},(err,result)=>{
    	if(err){
    		console.log('update user err::',err);
    	}else{
    		console.log(result);
    	}
    })
    
    UserModel.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
    	if(err){
    		console.log('update user err::',err);
    	}else{
    		console.log(result);
    	}
    })
	*/
	// 4-4.删除数据
	UserModel.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log('deleteOne user err::',err);
		}else{
			console.log(result);
		}
	})
})
