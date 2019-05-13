// 作用域在模块内的变量
// 以下变量虽然看起来是全局的，但其实并不是。 它们仅存在于模块范围内

console.log(__dirname);
//E:\web\test\012-nodejs\05-global
console.log(__filename);
//E:\web\test\012-nodejs\05-global\01-__filename__dirname.js
console.log("exports::",exports);
//exports:: {}
console.log("require::",require);
/*
 function require(path) {
    try {
      exports.requireDepth += 1;
      return mod.require(path);
    } finally {
      exports.requireDepth -= 1;
    }
  }
*/
console.log("module::",module);
 /*module:: Module {
  id: '.',
  exports: {},
  parent: null,
  filename:
   'E:\\web\\test\\012-nodejs\\05-global\\01-__filename__dirname.js',
  loaded: false,
  children: [],
  paths:
   [ 'E:\\web\\test\\012-nodejs\\05-global\\node_modules',
     'E:\\web\\test\\012-nodejs\\node_modules',
     'E:\\web\\test\\node_modules',
     'E:\\web\\node_modules',
     'E:\\node_modules' ] }
 */
