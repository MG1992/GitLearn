const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx.headers);
  console.log('我真的是个傻子...');
  console.log('我可能真的是个傻子...');
  await next();
});
app.use(async ctx => {
  ctx.body = 'Hello World';
});



app.listen(3000);