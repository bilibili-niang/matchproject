const app = require("./src/app");
// 这里只用引入server的配置
const {server} = require("./src/config/default");

console.log("app:");
console.log(app);
app.listen(87, () => {
  console.log(`server is running at :${server.port},`);
});
