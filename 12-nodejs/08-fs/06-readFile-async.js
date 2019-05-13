// 异步读文件 promise 处理

const fs = require('fs');

const util = require('util');
const readfile = util.promisify(fs.readFile);

/*
readfile('./01.text.js',{flag:'r'})
.then(data=>{
	console.log(data);
})
*/

async function callReadfile(){
	let data = await readfile('./01.text.js',{flag:'r'});
	return data;
}
callReadfile()
.then(data=>{
	console.log(data);
})