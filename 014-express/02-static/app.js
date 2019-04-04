// 引入express方法
const express = require('express');
// 调用express方法，生成app
const app = express();
//定义端口号
const port = 3000;
//
// app.use(express.static('public'));
//设置虚拟路径
app.use('/static', express.static('public'))

// 请求的处理
// app.get('/', (req, res) => res.send('Hello World! 你好 世界'));
app.get('/', (req, res) => res.send('<h1>Hello World! 你好 世界</h1>'));
// 用listen方法监听port在端口的运行
app.listen(port, () => console.log(`app listening on port ${port}!`));