//自定义可写流

const {Writable} = require('stream');
//继承
class MyWriter extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);//<Buffer 68 65 6c 6c 6f>
		//console.log(encoding);//buffer
		callback && callback();//<Buffer 6b 75 61 7a 68 75
	}
}

const writer = new MyWriter();

writer.on('finish',()=>{
	console.log('finish....');
})

writer.write('hello','utf-8',()=>{
	console.log('hello');
})

writer.write('kuazhu');
writer.end();


