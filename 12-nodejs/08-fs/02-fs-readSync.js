// 同步读文件 readSync


const fs = require('fs');

// 1.打开文件
const fd = fs.openSync('./01.text.js','r');
// 2.读文件
const buf = Buffer.alloc(100);
console.log(buf);
fs.readSync(fd,buf,0,100,0);
console.log(buf);
// 3.关闭
fs.closeSync(fd);


//复合
// fs.readFileSync('./01.text.js',{flag:'r'}); 


// console.log(buf);



