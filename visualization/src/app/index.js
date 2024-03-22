const koa = require("koa");
const router = require("../router/index");
const rankingRoute = require("../router/ranking");
const addressRoute = require("../router/address");
const dataRouter = require("../router/getData");
const cityDetailRouter = require("../router/cityDetail");
const messageRouter = require("../router/message");
const bodyParser = require("koa-bodyparser");
//参数校验
const parameter = require("koa-parameter");
// 引入 koa-html-template
const template = require("koa-html-template");
const static = require("koa-static");
const views = require("koa-views");
const app = new koa();
const errHandler = require("./errHadnler");
const path = require("path");
const render = require("koa-art-template");
app.use(bodyParser());

//开放html模板的静态目录
app.use(views(path.join(__dirname, "../static/views/"), {extension: "html"}));
app.use(static(path.join(__dirname, "../static")));
app.use(static(path.join(__dirname, "../../node_modules")));
app.use(template());

render(app, {
  //视图位置
  root: path.join(__dirname, "../static/views/"),
  //后缀名(.ejs)
  extname: ".html",
  //是否开启调试模式
  debug: process.env.NODE_ENV !== "production"
});

app.use(parameter(app));

//开放静态资源路径
app.use(static(path.join(__dirname, "../upload")));
//挂载
app.use(router.routes());
app.use(rankingRoute.routes());
app.use(addressRoute.routes());
app.use(dataRouter.routes());
app.use(cityDetailRouter.routes());
app.use(messageRouter.routes());

//统一的错误处理:
app.on("error", errHandler);

app.listen(87, () => {
  console.log("listen start!");
});

// 导出:
module.exports = app;