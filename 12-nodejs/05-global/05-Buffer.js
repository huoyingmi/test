/*
一个二进制的0 或者 1 代表了 1bit(位)
8bit(位) = 1B(字节) = 2个16进制数
1kb = 1024B
1MB = 1024kb
1GB = 1024MB
1TB = 1024GB
*/



/*
const buf1 = Buffer.from(123456);
console.log("buf1::",buf1); //215
*/

/*
// 1个英文字符 = 1B = 2个16进制数  
// 5个英文字符 = 5*1B 
const buf2 = Buffer.from('hello');
console.log("buf2::",buf2); //<Buffer h-68 e-65 l-6c l-6c o-6f>5个

// 1个汉字 = 3B = 3*1B  
// 3个汉字= 3*3*1B = 9*1B 
const buf3 = Buffer.from('你好么');
console.log("buf3::",buf3); //<Buffer e4 bd a0 e5 a5 bd e4 b9 88>9个
*/

// Buffer.alloc(size,fill,encoding)
// size新建的 Buffer 的长度。 fill预填充 Buffer 的值。默认为 0。
// encoding如果 fill 是字符串，则指定 fill 的字符编码。默认为 'utf8'。
/*
const buf4 = Buffer.alloc();
console.log("buf4::",buf4); //出错了，size必须要填，其他可以不填
*/
/*
const buf4 = Buffer.alloc(10);
console.log("buf4::",buf4); //<Buffer 00 00 00 00 00 00 00 00 00 00>10个
*/
/*
const buf5 = Buffer.alloc(10,'a');
console.log("buf5::",buf5); //<Buffer 61 61 61 61 61 61 61 61 61 61>a=61
buf5[0] = 1;
console.log("buf51::",buf5); //<Buffer 01 61 61 61 61 61 61 61 61 61>
buf5[1] = 6;
console.log("buf52::",buf5); //<Buffer 01 06 61 61 61 61 61 61 61 61>
buf5[2] = "b";
console.log("buf53::",buf5);//<Buffer 01 06 00 61 61 61 61 61 61 61>
console.log(buf5.toString());
*/

const buf6 = Buffer.alloc(15); 
/*
buf6[0] = 0xe4;
buf6[1] = 0xbd;
buf6[2] = 0xe4;
console.log(buf6.toString());//锟斤拷
*/
buf6[0] = 0xa0;
buf6[1] = 0xe5;
buf6[2] = 0xbd;
buf6[3] = 0xa5;
console.log(buf6.toString());//锟藉渐

  