// @ts-nocheck
const router=require('koa-router')();
const {findUser,register}=require('../MongoDB/User');
const secret="koa";
const {sign,decode}=require('jsonwebtoken');   //  签发Token
const jwt=require('koa-jwt')({secret});       // jwt加解码中间件

router.prefix('/register');

router.post('/',async (ctx,next)=>{
  const {account,password}=ctx.request.body;
  const token=sign({account},secret,{expiresIn:1});
  console.log(account)
  await findUser({account:account}).then((data)=>{
    console.log("注册")
    if(data.length===0){
        register({
          account:account,
          password:password,
          company:[],
          qualified:true
        })
        // ctx.cookie.set('token',token)
        ctx.body='logined';
    }else{
        ctx.body='goLogin'
    }
  })
  await next();
})


module.exports=router;