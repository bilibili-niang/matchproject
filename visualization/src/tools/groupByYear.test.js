// 测试根据year字段查询数据
const allLines = require('../schema/citys')

async function getNums() {
    const res = await allLines.findAll({
        attributes: ['year', 'id'],
        raw: true
    }, {group: 'year'})
    /*
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    */

    const list = res.map(item => {
        return item.year
    })
    var obj = {};
 /*   list.forEach((item, index) => {
        console.log(item)
        if (obj.item == null) {
            obj.item = 1
        }

    })*/
    for(var i= 0, l = list.length; i< l; i++){
        var item = list[i];
        obj[item] = (obj[item] +1 ) || 1;
    }
    console.log("obj:")
    console.log(obj)


}

getNums()