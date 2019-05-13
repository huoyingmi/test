/*
const ev = require('events');
console.log(ev); //得到EventEmitter类
*/
const EventEmitter = require('events');

/*
const emitter = new EventEmitter();
// console.log(emitter);
//绑定事件
emitter.on('test',()=>{
	console.log('running test...');
})

//事件触发
emitter.emit('test');
*/

class MyEmitter extends EventEmitter{

}
const emitter = new MyEmitter();
emitter.on('test',()=>{
	console.log('running test...');
})
emitter.emit('test');