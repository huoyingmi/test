// 同步写文件 writeSync


const fs = require('fs');
/*
//1.打开文件
	// openSync('文件路径','文件系统标志');
	const fd = fs.openSync('./01.text.js','a');
//2.写入数据
	// writeSync(文件,'数据');
	fs.writeSync(fd,'hello');
// 保存退出
	// closeSync(文件);
	fs.closeSync(fd);

*/

//复合样式
fs.writeFileSync('./01.text.js','kuazhu',{flag:'a'});