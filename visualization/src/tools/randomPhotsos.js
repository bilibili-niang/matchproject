// 为photos字段为空的数据随机赋值一张photo
const allLines = require('../schema/citys');
const {Op} = require('sequelize');

async function getRandomPhotos() {
    const list = ['https://img1.qunarzz.com/sight/p0/1506/25/d1744c5359efda879cfef52e0ff72eec.water.jpg', 'https://img1.qunarzz.com/travel/poi/1412/52/52395f3d225c9866cdb.jpg', 'https://img1.qunarzz.com/travel/poi/1705/a2/74459ec34549b737.jpg']
    return list[randomNum(0, 2)]
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

// 查询photos字段为空的数据并为其赋值:
async function getNullPhotos() {
    const res = await allLines.findAll({
        attributes: ['photos', 'id'],
        where: {
            photos: {
                [Op.is]: null
            }
        },
        raw: true
    })
    res.forEach((item, index) => {
        const random = getRandomPhotos();
        updateById(item.id, random)


    })

}

// 返回随机一条photos
// getRandomPhotos();
async function updateById(id, photos) {
    await allLines.update({
        photos: photos
    }, {
        where: {
            id
        }
    })
        .then(res => {
            console.log('成功')
        })
        .catch(e => {
            console.log('失败')
            console.log(e)
        })
}

getNullPhotos();
