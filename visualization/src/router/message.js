const Router = require('koa-router');
const router = new Router();
const {
    returnAdd
} = require('../controller/message.controller')
const message = require('../schema/message');
router.get('/message', async (ctx) => {
    await ctx.render('message.html', {
        demo: "run demo",
    })
})
// 添加
router.post('/addMessage', returnAdd)

// 获取
router.get('/allMessage', async (ctx) => {
    const result = await message.findAll({
        attributes: ['word'],
        raw: true
    })
    ctx.body = {
        code: 200,
        result
    }
})
module.exports = router;