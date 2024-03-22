// 插入2019-2022年随机票价
const allLines = require('../schema/citys')

async function random() {
    const res = await allLines.findAll({
        attributes: ['id', 'old_1', 'old_2', 'old_3', 'old_4'],
        raw: true
    }, {group: 'year'})
    console.log("res:")
    console.log(res)
    res.forEach((item, index) => {
        // console.log(item.id)
        updateFareById(item.id, randomNum(20, 150), randomNum(30, 120), randomNum(10, 306), randomNum(50, 350))
    })

}

// 返回指定范围内的随机整数
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

async function updateFareById(id, num1, num2, num3, num4) {
    await allLines.update({
        old_1: num1,
        old_2: num2,
        old_3: num3,
        old_4: num4
    }, {
        where: {
            id
        }
    })
        .then(res => {
            console.log('成功')
        })
        .catch(e => {
            console.log(e)
            console.log('失败')
        })

}

random();