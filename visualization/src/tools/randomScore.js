// 添加随机分数,50-100
const allLines = require('../schema/citys')

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

function addRandomScore() {
    allLines.findAll({
        attributes: ['id','score'],
        raw: true
    }).then(res => {
        // console.log(res)
        res.forEach((item, index) => {
            /*console.log(index)
            console.log(years[randomNum(0, 4)])*/
            allLines.update({
                    score: randomNum(50, 10)
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

// addRandomScore();