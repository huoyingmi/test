//console.log(str); //str is not defined

require('./m03.js'); //不执行m03.js文件，无法拿到str

console.log('m04...');
console.log(global.str);
console.log(str);
