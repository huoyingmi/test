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
    //找到第一个用户名是Tom的所有的博文
    UserModel.findOne({name:"Tom"},(err,user)=>{
        if(err){
            console.log('findOne user err::',err);
        }else{
            // console.log(user);
            //找到Tom后，再找到博文
            BlogModel.find({author:user._id},(err,blogs)=>{
                if(err){
                    console.log('find blog err',err);
                }else{
                    console.log(blogs);
                }
            })
        }
    })
    */
    /*
    //找到第一个用户名是Tom的所有的博文
    UserModel.findOne({name:"Tom"},(err,user)=>{
        if(err){
            console.log('findOne user err::',err);
        }else{
            user.findBlogs((err,blogs)=>{
                if(err){
                    console.log('findBlogs err::',err);
                }else{
                    console.log(blogs);
                }
            })
        }
    })
    */
    UserModel.findByPhone('18236803445',(err,user)=>{
        if(err){
            console.log('findByPhone err::',err);
        }else{
            console.log(user);
        }
    })
})
