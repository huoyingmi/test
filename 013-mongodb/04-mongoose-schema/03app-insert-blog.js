// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

//将BlogModel引入
const BlogModel = require('./models/blog.js');

// 1.mongoose对象的connect方法连接到数据库中
mongoose.connect('mongodb://localhost/huoyingmi', {useNewUrlParser: true});

// 用监听事件判断是否成功
// 1-1.首先拿到mongoose对象的connection
const db = mongoose.connection;

// 1-2.监听事件1
db.on('error',(err)=>{
	console.log('connection error');
	throw err;
});

// 1-3.监听事件2
db.on('open',()=>{
	console.log('connection successful');
    /*
    BlogModel.insertMany({
        name:"Tom",
        age:20,
        major:"computer"
    },(err,docs)=>{
        if(err){
            console.log('insertMany blog err::',err);
        }else{
            console.log(docs);
        }
    })
    */
	 BlogModel.insertMany({
        title:"title3",
        content:"content3",
        author:"5ca4a90bf657611f98d65ecc"
    },(err,docs)=>{
        if(err){
            console.log('insertMany blog err::',err);
        }else{
            console.log(docs);
        }
    })
})
