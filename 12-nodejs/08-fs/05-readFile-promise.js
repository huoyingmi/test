// 异步读文件 promise 处理

const fs = require('fs');
const util = require('util');

const readfile = util.promisify(fs.readFile);

readfile('./01.text.js',{flag:'r'})
.then(data=>{
	console.log(data);
})
/*
fs.readFile('./01.text.js',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile error::',err);
	}else{
		console.log(data);
	}
})
*/