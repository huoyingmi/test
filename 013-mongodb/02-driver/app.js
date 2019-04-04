//引入mongodb,获得MongoClient函数，类
const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);

// Connection URL 启动本机的端口号
const url = 'mongodb://localhost:27017';

// 定义变量是Database name 名字
const dbName = 'huoyingmi';

// new了一个实例对象 传入参数url,连接到端口上
const client = new MongoClient(url,{ useNewUrlParser: true });

// 用client上面的connect方法链接到server
client.connect(function(err){
	//成功链接
	console.log('Connected successfuly to server');
	// 用client上面的db方法拿到dbName对象
	const db = client.db(dbName);

	//1.Get the documents collection生成collection
	const collection = db.collection('users');

	/*
	// Insert a document 插入数据操作

	// 2.用insertMany方法生成数据
	collection.insertMany([{name:"Leo",age:20,major:"computer"},{name:"Peter",age:50,major:"sport"}],(err,result)=>{
		if(err){
			console.log("insertMany err::",err);
		}else{
			console.log(result);
		}

		//操作完成要进行关闭
		client.close();
	});
	*/

	/*
	// Find all 查询所有操作
	collection.find({}).toArray((err,docs)=>{
		if(err){
			console.log("find err::",err);
		}else{
			console.log(docs);
		}

		//操作完成要进行关闭
		client.close();
	});
	// Find a 查询某一个操作
	collection.find({age:20}).toArray((err,docs)=>{
		if(err){
			console.log("find err::",err);
		}else{
			console.log(docs);
		}

		//操作完成要进行关闭
		client.close();
	});
	*/
	/*
	// update更新操作
	collection.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log("updateOne err::",err);
		}else{
			console.log(result);
		}

		//操作完成要进行关闭
		client.close();
	});
	*/
	// remove a document 删除操作
	collection.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log("deleteOne err::",err);
		}else{
			console.log(result);
		}

		//操作完成要进行关闭
		client.close();
	});

});