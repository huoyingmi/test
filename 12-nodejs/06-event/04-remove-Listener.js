const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
}

const emitter = new MyEmitter();
/*
emitter.on('test',()=>{
	console.log("1::",'running test...');
})
*/

const fn1 = ()=>{
	console.log("1::",'running test...');
}
// fn1();
emitter.on('test',fn1);

//移除事件 其中fn1不能删除
// emitter.off('test',fn1);
// emitter.removeListener('test',fn1);
// console.log(emitter.off === emiter.removeListener);//true

emitter.emit('test');