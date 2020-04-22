const Koa = require('koa')
const app = new Koa()
const cors= require('koa2-cors');
const bodyparser = require('koa-bodyparser')
const Router=require('koa-router');
const login=require('./routes/login');
const register=require('./routes/register');

app
app.use(cors({
  origin:"*",
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
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
