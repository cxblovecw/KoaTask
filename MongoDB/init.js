const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ding", { useUnifiedTopology: true,useNewUrlParser: true} )
const Schema=mongoose.Schema;
const User=new Schema({
    account:Number,
    password:String,
    company:Array,
    qualified:Boolean
})
const Company=new Schema({
    boss:String,
    createTime:Date,
    employee:Array,
    name:String,
})
const user=mongoose.model('user',User);
const company=mongoose.model('company',Company)


module.exports={user:user,company:company};