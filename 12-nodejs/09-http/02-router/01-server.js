
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	console.log("url=>",req.url);

	const filepath = req.url;
	if(filepath == '/index.html'){
		//读取‘./index.html’
		fs.readFile('./index.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);
			}
		})
	}else if(filepath == '/list.html'){
		// 读取‘./list.html’
		fs.readFile('./list.html',(err,data)=>{
			if(err){
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.statusCode = 500;
				res.end('<h1>出错了</h1>');
			}else{
				res.setHeader('Content-Type',"text/html;charset=utf-8");
				res.end(data);
			}
		})
	}else{
		// 404
		res.setHeader('Content-Type',"text/html;charset=utf-8");
		res.statusCode = 404;
		res.end('<h1>页面出错了，找不到。。。</h1>');

		
	}


	/*
	// 设置可以写中文并按照标签格式写出
	res.setHeader('Content-Type',"text/html;charset=utf-8");
	//可写流写入数据，调用write方法
	res.end('<h1>hello 世界</h1>');
	*/
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000');
})