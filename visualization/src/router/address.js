const Router = require('koa-router');
const router = new Router();
const allLines = require('../schema/citys')
const {getDetailByAddress} = require('../middleware/address.middleware');

router.get('/addressDetail', async (ctx) => {
    // 获取查询的具体景点
    const address = ctx.query.address || '西沙海洋博物馆';

    console.log("address:")
    console.log(address)

    const addressRes = await getDetailByAddress(address);
    console.log('addressRes')
    console.log(addressRes)

    await ctx.render('address.html', {
        address,
        addressRes
    })


})

module.exports = router;