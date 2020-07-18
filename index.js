const Koa = require('koa');
const next = require('next');
const logger = require('koa-logger');;
const Router = require('@koa/router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const app = new Koa();
  const router = new Router();

  router.all('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  app.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  app.use(logger());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
});
