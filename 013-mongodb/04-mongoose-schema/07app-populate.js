// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

//将UserModel引入
const UserModel = require('./models/user2.js');
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
    //找到博文名字为"title1"的博文的所有信息和作者的信息
    BlogModel.findOne({title:"title1"},(err,blog)=>{
        if(err){
            console.log('findOne blog err::',err);
        }else{
            console.log("blog",blog);
            UserModel.findById(blog.author,(err,user)=>{
                if(err){
                    console.log('findById user err::',err);
                }else{
                    console.log("user::",user);
                }
            })
        }
    })
    */
    /*
    //找到博文名字为"title1"的博文的所有信息和作者的信息
    BlogModel.findOne({title:"title1"},(err,blog)=>{
        if(err){
            console.log('findOne blog err::',err);
        }else{
            const result = {
                blog:blog
            }
            UserModel.findById(blog.author,(err,user)=>{
                if(err){
                    console.log('findById user err::',err);
                }else{
                    result.user = user;
                    console.log(result);
                }
            })
        }
    })
    */
    BlogModel.findOne({title:"title1"})
    .populate('author','-_id')
    .then(result=>{
        console.log(result);
    })
    
})
