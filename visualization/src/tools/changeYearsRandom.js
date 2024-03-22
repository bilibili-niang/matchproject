//　为数据随机添加年份
const allLines = require('../schema/citys')

const years = [2019, 2020, 2021, 2022, 2023];

//生成从minNum到maxNum的随机数
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

// 为所有数据添加随机年份
function addRandomYears() {
    allLines.findAll({
        attributes: ['id'],
        raw: true
    }).then(res => {
        // console.log(res)
        res.forEach((item, index) => {
            /*console.log(index)
            console.log(years[randomNum(0, 4)])*/
            allLines.update({
                    year: years[randomNum(0, 4)]
                },
                {
                    where: {
                        id: item.id
                    }
                })
                .then(res => {
                    console.log('update success')
                })
                .catch(e => {
                    console.log('update error')
                })

        })

    })
        .catch(e => {
            console.log(e)
        })
}

// addRandomYears()