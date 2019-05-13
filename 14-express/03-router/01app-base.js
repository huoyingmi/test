// 引入express方法
const express = require('express');
// 调用express方法，生成app
const app = express();
//定义端口号
const port = 3000;
//
app.use(express.static('public'));

// 请求的处理

app.all('',(req, res,next)=>{
	console.log('all....');
	next();
})

// app.get('/', (req, res) => res.send('Hello World! 你好 世界'));
// app.get('/', (req, res) => res.send('get respoonse data...'));

app.get('/', (req, res,next) => {
	console.log('do something...');
	next();
	
},(req, res)=>{
	res.send('get respoonse data...')
});

app.post('/', (req, res) => res.send('post respoonse data...'));
app.put('/', (req, res) => res.send('put respoonse data...'));
app.delete('/', (req, res) => res.send('delete respoonse data...'));


// 用listen方法监听port在端口的运行
app.listen(port, () => console.log(`app listening on port ${port}!`));