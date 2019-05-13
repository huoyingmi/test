const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
}

const emitter = new MyEmitter();

emitter.on('newListener',(eventName,cb)=>{
	console.log('newListener...');
	console.log(eventName);
	// console.log(cb);
	cb();
})

emitter.on('test1',()=>{
	console.log('1::','running test1...');
})
emitter.on('test2',()=>{
	console.log('2::','running test2...');
})
