const Router = require('koa-router');
const router = new Router();

router.get('/getPopData', (req, res) => {
    /*    console.log('getPopData')
        const city = req.query.city || '北京';
        console.log('city')
        console.log(city)*/

    res.send({
        code: 200
    })
})


module.exports = router;