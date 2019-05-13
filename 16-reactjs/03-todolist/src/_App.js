console.log('App....');

/*
//写法一
export const a = 1;
export const b = 2;
*/
/*
//写法二
const a = 1;
const b = 1;
export {a,b};
*/
/*
// 写法三
const a = 1;
const b = 1;
export {a,b};
*/
/*
// 写法四
const a = 1;
const b = 1;
export {a,b as b1};
*/
// 写法五
/*
const a = 1;
export default a;

export default 111;

export default const a=1;//错误
*/

export const {a} = 1;

