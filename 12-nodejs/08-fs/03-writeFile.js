// 异步写文件

const fs = require('fs');

/*
// 1.打开文件
fs.open('./01.text.js','a',(err,fd)=>{
	if(err){
		console.log('open error::',err);
	}else{
		console.log('open success');
		// 2.写文件
		fs.write(fd,'hello',(err)=>{
			if(err){
				console.log('write error::',err);
			}else{
				console.log('write success');
			}
			// 3.关闭
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error::',err);
				}else{
					console.log('close success');
				}
			})
		})
	}
})
*/

fs.writeFile('./01.text.js','kuazhu',{flag:'w'},(err)=>{
	if(err){
		console.log('writeFile error::',err);
	}else{
		console.log('writeFile success');
	}
})

console.log('do someting...');