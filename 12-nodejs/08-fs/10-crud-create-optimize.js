// fs 处理json文件优化optimize

// 获取fs
const fs = require('fs');
const util = require('util');
// 获取data.json文件
const filePath = './data.json';
//获取readFile和writeFile函数
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function add(name){
	// 1.获取原有的数据
	let data = await readFile(filePath);
	//console.log(data);//<Buffer 5b 5d>

	// 将Buffer转换成数组
	let arr = JSON.parse(data);
	console.log(arr);
	// 2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),//转字符串再补全长度
		name:name
	})
	console.log(arr);
	// 3.保存
	const strArr = JSON.stringify(arr);
	await writeFile(filePath,strArr);

	return arr;
}

// console.log(add('Amy'));//Promise对象
add('Amy')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})

/*
// 添加文件操作
const add = (name,callback)=>{
	
	// 1.获取原有的数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			callback(err);
		}else{
			// 将Buffer转换成数组
			let arr = JSON.parse(data);
			console.log(arr);
			
			// 2.添加数据到原有的数据中
			arr.push({
				// id:Date.now()//得到数字
				// id:Date.now().toString()//将数字转字符串
				// id:Date.now().toString()+parseInt(Math.random()*10000)//添加4位数的随机整数
				id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),//转字符串再补全长度
				name:name
			})
			// console.log(arr);
			// 3.保存
			const strArr = JSON.stringify(arr);
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					callback(err);
				}else{
					callback(null,arr);
				}
			})
			
		}
	})
	
}

// 调用
add('Tom',(err,data)=>{
	if(err){
		console.log('error::',err);
	}else{
		console.log(data);
	}
})
*/