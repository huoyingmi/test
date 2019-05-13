
/*
//延迟定时器 delayTimer
console.log(1);
//setTimeout(回调函数，延迟时长)
let delayTimer = setTimeout(()=>{
	console.log(2);
},100)
//清除定时器
clearTimeout(delayTimer); //1 3

console.log(3);  //1 3 2
*/

/*
//循环定时器cycleTimer
console.log(1);
//setInterval(回调函数，延迟时间)
let cycleTimer = setInterval(()=>{
	console.log(2);
},100)
//清除定时器
clearInterval(cycleTimer); //1 3

console.log(3);  //1 3 2222.. 退出Ctrl+c
*/

// 延迟定时器
console.log(1);
// setImmediate(回调函数)
let timer = setImmediate(()=>{
	console.log(2);
})
// 清除定时器
clearImmediate(timer);  //1 3

console.log(3);  //1 3 2