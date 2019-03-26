const http = require('http');

const server = http.createServer((req,res)=>{
	//req=request  可读流
	//res=response  可写流

	/*
	// 设置可以写中文
	res.setHeader('Content-Type',"text/plain;charset=utf-8");
	//可写流写入数据，调用write方法
	res.write('hello world 你好 世界');
	*/
	// 设置可以写中文并按照标签格式写出
	res.setHeader('Content-Type',"text/html;charset=utf-8");
	//可写流写入数据，调用write方法
	res.write('<h1>hello world 你好 世界</h1>');

	res.end('kuazhu');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000');
})