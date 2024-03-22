// 首页
const Router = require('koa-router')
const router = new Router()
const axios = require('axios');
const {returnCity, getAllCitys, getCitysInf} = require('../middleware/city.middleware');



router.get('/', index)

router.get('/login', login)
router.get('/detail', detail)
router.get('/recommend', async (ctx) => {
    await ctx.render('recommend.html', {
        demo: "run demo"
    })
})
router.get('/discount', async (ctx) => {
    await ctx.render('discount.html', {
        demo: "run demo"
    })
})
router.get('/relax', async (ctx) => {
    await ctx.render('relax.html', {
        demo: "run demo"
    })
})
// 美食打卡
router.get('/delicacies', async (ctx) => {
    await ctx.render('delicacies.html', {
        demo: "run demo"
    })
})
router.get('/about', async (ctx) => {
    await ctx.render('about.html', {
        demo: "run demo"
    })
})
router.get('/overview', async (ctx) => {
    await ctx.render('overview.html', {
        demo: "run demo"
    })
})
router.get('/word', async (ctx) => {
    await ctx.render('wordCloud.html', {
        demo: "run demo"
    })
})

async function index(ctx) {
    await ctx.render('index.html', {
        demo: "run demo",
    })
}

async function login(ctx) {
    await ctx.render('login.html', {})
}

async function detail(ctx) {
    console.log('detail')
// 获取get请求的城市
    const city = ctx.query.city || '北京';
    const returnCitys = await getCitysInf(city);

    if (city == '北京') {
        // 默认城市为北京
        // 本地连接,默认为北京
        // 获取北京地区的景区排名,根据分数排序
        const res = await returnCity('北京');
        const allCitys = await getAllCitys();
        await ctx.render('detail.html', {
            data: res,
            city: allCitys,
            address: city,
            citys: returnCitys
        })
    } else {
        const res = await returnCity(city);
        const allCitys = await getAllCitys();
        await ctx.render('detail.html', {
            data: res,
            city: allCitys,
            address: city,
            citys: returnCitys
        })
    }
}


module.exports = router;