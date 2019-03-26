const fs = require('fs');
const ws = fs.createWriteStream('./ws2-txt.js');
const rs = fs.createReadStream('./rs-txt.js');

rs.on('open',()=>{
	console.log('rs open...');
})
rs.on('close',()=>{
	console.log('rs close...');
})
rs.on('data',(chunk)=>{
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('rs end...');
})


rs.pipe(ws);