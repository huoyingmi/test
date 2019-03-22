// 同步可读流

const {Readable} = require('fs');
// 继承
class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){
		this.index++;
		if(this.index > 5){
			this.push(null);
		}else{
			this.push(this.index);
		}
	}
}

const reader = new MyReader();
reader.on('data',(chunk)=>{
	console.log(chunk.toString());
})

reader.on('end',()=>{
	console.log('end...');
})

// reader.pipe(process.stream);