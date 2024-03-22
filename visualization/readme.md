> 项目后端基于nodejs,前端使用jquery,bootstrap,echarts

> 准备

- 使用之前请安装nodejs ^14.6
- 配置mysql数据库,建议使用mysql8.0
  - 连接的数据库名称:`citys`,默认配置文件位于 config/default.js 
  - 创建数据库后,使用schema下的`citysInit.js`运行一下,会自动创建对应的数据表
  - 然后把准备好的数据导入,文件在`devise`下,以csv或sql结尾



```shell
npm i
npm run start
```
默认启动地址:`http://localhost/`



1.创新点，前后端分别怎么作用的

后端nodejs的koa框架,是一洋葱模型的框架  
前端使用的是jquery,bootstrap,由于当初技术选型时,这是个小项目,就没有考虑使用vue,react之类的框架  

关于创新,在于页面渲染上,使用的是服务端渲染,art-template,这样减少用户在查看时的渲染时间  
对seo爬取有部分优化

2.有什么难点

主要是页面图表的设计上,对不同种类的数据需要针对性的选型  

3.主要就是运用了哪些技术

技术上前后端都是js,mysql,练ts都没用上,图表主要用的都是echarts  
数据库连接用的是sequlize


