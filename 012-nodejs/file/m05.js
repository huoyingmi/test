// 将m05中的三个信息导出去，在m06中引用

const str = 'hello';


const fn = ()=>{
	console.log('fn....');
}


const obj = {
	name:"Tom",
	age:18
}

//console.log("exports::",exports);
// console.log("module::",module);
//console.log("module.exports::",module.exports);
// console.log("exports === module.exports::",exports === module.exports);

// exports和module.exports指向同一个对象

/*
//在exports上面动态添加属性
exports.str = str;
exports.fn = fn;
exports.obj = obj;
console.log("m05::",exports);
*/

//在module.exports上面动态添加属性
module.exports.str = str;
module.exports.fn = fn;
module.exports.obj = obj;
console.log("m05::",module.exports);


/*
// 指向一个新对象
module.exports = {
	str:str,
	fn:fn,
	obj:obj
}
// exports.arr = [11,22,33,44];
module.exports.arr = [11,22,33,44];
console.log(exports === module.exports);
*/