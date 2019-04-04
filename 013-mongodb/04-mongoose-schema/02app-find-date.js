// 获取mongoose对象
const mongoose = require('mongoose');
// console.log(mongoose);

const moment = require('moment');

//将UserModel引入
const UserModel = require('./models/user.js');

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
   UserModel.findById('5ca479a595db7d1d0cfb80b4',(err,user)=>{
        if(err){   

            console.log('find user err::',err);
        }else{
            // console.log(user);
            // console.log(user.createAt);
            /*
            //1.用Date类的方法将时间转换成北京时间
            const date = new Date(user.createAt);
            console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
            */
            //2.用moment.js库的方法专门处理时间的将时间转换成北京时间
            console.log(moment(user.createAt).format('YYYY-MM-DD HH:mm:ss'));
        }
   })
})
