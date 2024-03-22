// 为每个景点随机赋值2022年12个月的门票钱
const allLines = require('../schema/citys');

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

function random() {
    allLines.findAll({
        attributes: ['id', 'fare_1'],
        raw: true
    }).then(res => {
        console.log(res)
        res.forEach((item, index) => {
            /*console.log(index)
            console.log(years[randomNum(0, 4)])*/
            allLines.update({
                    fare_1: randomNum(10, 90),
                    fare_2: randomNum(20, 130),
                    fare_3: randomNum(10, 80),
                    fare_4: randomNum(10, 90),
                    fare_5: randomNum(30, 120),
                    fare_6: randomNum(10, 200),
                    fare_7: randomNum(10, 130),
                    fare_8: randomNum(10, 300),
                    fare_9: randomNum(60, 540),
                    fare_10: randomNum(10, 240),
                    fare_11: randomNum(30, 600),
                    fare_12: randomNum(30, 600),
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

// random();