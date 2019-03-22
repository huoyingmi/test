
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{

}

const emitter = new MyEmitter();
/*
emitter.on('test',()=>{
	console.log('running test...');
})
*/
/*
emitter.on('test',(arg1,arg2)=>{
	console.log('running test...');
	console.log(arg1,arg2);
})
*/
// 扩展运算符
const args = ['hello','kuazhu'];

emitter.on('test',(arg1,arg2)=>{
	console.log('running test...');
	console.log(arg1,arg2);
})

emitter.emit('test',...args);


