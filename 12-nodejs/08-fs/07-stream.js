const fs = require('fs');
const ws = fs.createWriteStream('./ws-txt.js');
const rs = fs.createReadStream('./rs-txt.js');

/*
ws.on('open',()=>{
	console.log('ws open...');
})
ws.on('close',()=>{
	console.log('ws close...');
})
ws.on('finish',()=>{
	console.log('ws finish...');
})

ws.write('htllo');
ws.write('kuazhu');
ws.end();

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
*/

rs.pipe(ws);