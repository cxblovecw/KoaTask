// @ts-nocheck
const router=require('koa-router')();
const {findCompany}=require('../MongoDB/Company');
const {findUser}=require('../MongoDB/User');
const mongoose=require('mongoose');
const secret="koa";
const {sign,decode}=require('jsonwebtoken');   //  签发Token
const jwt=require('koa-jwt')({secret});       // jwt加解码中间件

router.prefix('/login');

router.post('/',async(ctx,next)=>{
    ctx.cookies.set("test",111,{
        maxAge:3600,
        httpOnly:false
    })
    const {account,password}=ctx.request.body;
    const token=sign({account},secret,{expiresIn:1});
    await findUser({account:account}).then((data)=>{
        if(data.length===0){
            ctx.body="goRegister";
        }else{
            if(data[0].password===password){
                ctx.cookies.set('token',token,
                {
                    domain:"/",
                    path: '/',      
                    maxAge: 10 * 60 * 1000, 
                });
                ctx.body='logined'
            }else{
                ctx.body="passwordError";
            }
        }
    })
    await next();
})

module.exports=router;