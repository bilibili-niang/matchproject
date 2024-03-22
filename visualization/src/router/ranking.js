const Router = require('koa-router');
const router = new Router();
const allLines = require('../schema/citys')
const {where} = require('sequelize');

router.post('/ranking', async (ctx) => {
    console.log('ranking')
    const res = await allLines.findAll({
        // attributes:['score'],
        order: [
            ['score', 'DESC']
        ],
        limit: 40,
        raw: true
    })
    console.log("res")
    console.log(res)
    ctx.body = {
        code: 200,
        result: res
    }
})

// 获取所有数据十二个月的


module.exports = router;