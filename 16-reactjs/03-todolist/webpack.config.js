// 开发环境的配置
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	// 指定打包环境
    mode:'development',
    // 指定打包入口
    
    // 单入口写法一：
    entry:{
    	// chunk名称
    	index:'./src/index.js',
    },
    
    // 单入口写法二：
    // entry: './src/index.js',
    // 指定打包出口
    output: {
    	// 出口文件名
	    // filename: 'bundle.js',
	    // filename: '[name].[hash].bundle.js',
	    filename: '[name].[chunkhash].bundle.js',
	    // 出口文件所在的目录
	    path: path.resolve(__dirname, 'dist')
    },
    module: {//module文件
    	// 规则
	    rules: [
	    // 处理css文件
	        {
		        test: /\.css$/, //正则表达式表示已.css结尾的信息
		        // 用什么来进行解析
		        use: [
			        // 没有配置
		            'style-loader',
		            'css-loader'
		        ]
	        },
		//处理图片 
			{
				test: /\.(png|jpg|gif|jpeg)$/i,
				use: [
					// 有配置放置对象
			  		{
			    		loader: 'url-loader',
		    			options: {
			      			// limit: 10
			      			limit: 10000
			    		}
			  		}
				]
			},
			// 处理babel
			{
			    test:/\.js$/,
			    exclude: /(node_modules)/,
			    use: {
				        loader: 'babel-loader',
				        options: {
				            presets: ['env', 'react']
			        }
			    }               
			}		   
	    ]
	},
	plugins:[
	    new htmlWebpackPlugin({
	        template:'./src/index.html',//模板文件
	        filename:'index.html',//输出的文件名
	        inject:true,//脚本写在那个标签里,默认是true(在body结束后)
	        hash:true//给生成的js/css文件添加一个唯一的hash
	    }),
	    new CleanWebpackPlugin() 
	],
	devServer:{
	    contentBase: './dist',//内容的目录
	    port:8080//服务运行的端口
	}
};
/*
// 生产环境的配置
const path = require('path');
module.exports = {
	// 指定打包环境
    mode:'production',
    // 指定打包入口
    entry: './src/index.js',
    // 指定打包出口
    output: {
    	// 出口文件名
	    filename: 'bundle.js',
	    // 出口文件所在的目录
	    path: path.resolve(__dirname, 'dist')
    }
};
*/