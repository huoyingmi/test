function (exports, require, module, __filename, __dirname) {
	 console.log(arguments.callee + '');
}
//加了一层函数  arguments.callee表明了当前正在运行的函数

// exports 导出, require 引用, module 上面有一个module.exports也用来导出 这三个主要用来模块化的