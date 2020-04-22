const Koa = require('koa')
const app = new Koa()
const cors= require('koa-cors');
const bodyparser = require('koa-bodyparser')
const Router=require('koa-router');
const login=require('./routes/login');
const register=require('./routes/register');

app
.use(cors({
  origin:"*"
}))
.use(bodyparser())

const router=new Router();
router.get('/',async (ctx,next)=>{
  await next();
})


app
.use(router.routes())
.use(login.routes())
.use(register.routes())



module.exports = app
