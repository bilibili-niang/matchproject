// 更新总的2022年票价:

const allLines = require('../schema/citys');

function all() {
    allLines.findAll({
        raw: true
    }).then(res => {
        // console.log(res)
        res.forEach((item, index) => {
            // console.log(item)
            const total = parseInt(item.fare_1) + parseInt(item.fare_2) + parseInt(item.fare_3) + parseInt(item.fare_4) + parseInt(item.fare_5) + parseInt(item.fare_6) + parseInt(item.fare_7) + parseInt(item.fare_8) + parseInt(item.fare_9) + parseInt(item.fare_10) + parseInt(item.fare_11) + parseInt(item.fare_12);
            /*console.log('total:')
            console.log(total)*/

            allLines.update({
                    fare_total: total
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

// all();