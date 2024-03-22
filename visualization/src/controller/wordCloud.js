const province = require('../schema/province');

class WordCloud {
    // 返回词云需要使用的数据
    returnWordCloudData = async function (ctx) {
        console.log('returnWordCloudData');
        const result = await province.findAll({
            attributes:['name','hot'],
            raw: true
        })
        console.log('result')
        console.log(result)
        ctx.body = ({
            code: 200,
            result
        })
    }
}

module.exports = new WordCloud();