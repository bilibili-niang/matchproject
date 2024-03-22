const app = require("./src/app");
// 这里只用引入server的配置
const {server} = require("./src/config/default");

app.listen(server.port, () => {
  console.log(`server is running at :${server.port},`);
});
