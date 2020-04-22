// const MongoClient=require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/ding",{ useUnifiedTopology: true
//  },function(error,client){
//     const db=client.db('ding');
//     db.createCollection("user");
//     db.createCollection('company');
// })

const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ding", { useUnifiedTopology: true,useNewUrlParser: true} )
const Schema=mongoose.Schema;
const User=new Schema({
    name:String,
    age:Number,
    Company:Array
})
const user=mongoose.model('user',User);
// user.insertMany({
//     name:'cxb',
//     age:20,
//     Company:[],
//     test:""
// })


module.exports=user;