// fs 处理json文件

// 获取fs
const fs = require('fs');
// 获取data.json文件
const filePath = './data.json';
// 添加文件操作
/*
const add = (name)=>{
	// 1.获取原有的数据
	fs.readFile(filePath,(err,data)=>{
		if(err){
			throw err;
		}else{
			// console.log(data);
			// 将Buffer转换成数组
			let arr = JSON.parse(data);
			console.log(arr);
			// 2.添加数据到原有的数据中
			arr.push({
				id:Date.now().toString() + parseInt(Math.random()*1000).toString().padStart(4,'0'),
				name:name
			})
			console.log(arr);
			// 3.保存
			const strArr = JSON.stringify(arr);
			fs.writeFile(filePath,strArr,(err)=>{
				if(err){
					console.log(err);
				}else{
					console.log(arr);
				}
			})
		}
	})
}
*/

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

// add('Tom');

// 调用
add('Tom',(err,data)=>{
	if(err){
		console.log('error::',err);
	}else{
		console.log(data);
	}
})
