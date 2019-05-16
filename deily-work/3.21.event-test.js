const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
}

const emitter = new MyEmitter();

emitter.on('test',()=>{
	console.log('running test...');
})

emitter.emit('test');