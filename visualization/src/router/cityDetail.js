const Router = require('koa-router');
const router = new Router();
const {
    getCityInfByName
} = require('../middleware/city.middleware');
const {
    returnWordCloudData
} = require('../controller/wordCloud');
const allLines = require('../schema/citys');

router.get('/cityDetail', async (ctx) => {
    const city = ctx.query.key || '西沙海洋博物馆';

    const cityData = await getCityInfByName(city);
    console.log("cityData:")
    console.log(cityData)

    ctx.render('cityDetail.html', {
        city,
        cityData:cityData
    })

})

// 词云的数据列表
router.get('/wordCloudData', returnWordCloudData)


module.exports = router;