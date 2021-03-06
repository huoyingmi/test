// fs 处理json文件优化optimize

// 获取fs
const fs = require('fs');
const util = require('util');
// 获取data.json文件
const filePath = './data.json';
//获取readFile和writeFile函数
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//增加
async function add(name){
	// 1.获取原有的数据
	let data = await readFile(filePath);
	//console.log(data);//<Buffer 5b 5d>

	// 将Buffer转换成数组
	let arr = JSON.parse(data);
	// console.log(arr);
	// 2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),//转字符串再补全长度
		name:name
	})
	// console.log(arr);
	// 3.保存
	const strArr = JSON.stringify(arr);
	await writeFile(filePath,strArr);

	return arr;
}
//获取
async function get(id){
	// 1.获取原有的数据
	let data =await readFile(filePath);
	let arr = JSON.parse(data);
	// 2.查找对应id的对象
	return arr.find(val=>{
		return val['id'] == id;
	})
}
// 修改更新
async function update(id,name){
	// 1.获取原有的数据
	let data =await readFile(filePath);
	let arr = JSON.parse(data);
	// 2.查找对应id的对象
	let obj = arr.find(val=>{
		return val['id'] == id;
	})
	if(obj){
		obj.name = name;
		// console.log(arr);
		// 3.保存
		const strArr = JSON.stringify(arr);
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;
	}
}
//删除
async function remove(id){
	// 1.获取原有的数据
	let data =await readFile(filePath);
	let arr = JSON.parse(data);
	//筛选
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})
	// console.log(newArr);
	// 3.保存
	const strArr = JSON.stringify(newArr);
	await writeFile(filePath,strArr);
	return newArr;
}

// console.log(add('Amy'));//Promise对象
/*
add('Many')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/
/*
get('15535904457469867')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/
/*
update('15535903960529991','peter')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/
remove('15535904397394794')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})

