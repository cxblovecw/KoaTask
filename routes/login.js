const router=require('koa-router')();
const {findCompany}=require('../MongoDB/Company');
const {findUser}=require('../MongoDB/User');
const mongoose=require('mongoose');

router.prefix('/login');

router.post('/',async(ctx,next)=>{
    const {account,password}=ctx.request.body;
    await findUser({account:account}).then((data)=>{
        if(data.length===0){
            ctx.body="goRegister";
        }else{
            console.log(data,password)
            if(data[0].password===password){
                ctx.body="login"
            }else{
                ctx.body="passwordError"
            }
        }
    })
    await next();
})
router.get('/',(ctx,next)=>{
 
})

module.exports=router;