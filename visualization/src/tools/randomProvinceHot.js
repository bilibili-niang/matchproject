// 随机生成省份的hot数值
const city = require('../schema/province');
async function rendom() {
    await city.findAll({
        attributes: ['id', 'hot'],
        raw: true
    })
        .then(res => {
            console.log(res)
            res.forEach((item, index) => {
                city.update({
                    hot: randomNum(20, 150)
                }, {
                    where: {
                        id: item.id
                    }
                })

            })

        })
        .catch(e => {
            console.log(e)
        })
}
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

// rendom()

