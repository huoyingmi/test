// 异步读文件

const fs = require('fs');
/*
// 1.打开文件
fs.open('./01.text.js','r',(err,fd)=>{
	if(err){
		console.log('open error::',err);
	}else{
		console.log('open success');
		// 2.读文件
		let buf = Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if(err){
				console.log('read error::',err);
			}else{
				console.log('read success');
				console.log(buf);
			}
			// 3.关闭
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error::',err);
				}else{
					console.log('close success');
				}
			})
		});
	}
})
*/
fs.readFile('./01.text.js',{flag:'r'},(err,data)=>{
	if(err){
		console.log('readFile error::',err);
	}else{
		console.log(data);
	}
})

console.log('do something...');