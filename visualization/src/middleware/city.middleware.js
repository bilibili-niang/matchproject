const allLines = require('../schema/citys');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const returnCity = async function (name) {
    return await allLines.findAll({
        attributes: ['dest_name', 'navigation_bar', 'city', 'ranking', 'address', 'url'],
        where: {
            city: name
        },
        raw: true
    })
}
const getAllCitys = async function () {
    const res = await allLines.findAll({
        attributes: ['city'],
        raw: true
    })

    function removeDuplicate(arr) {
        const newArr = []
        arr.forEach(item => {
            if (newArr.indexOf(item) === -1) {
                newArr.push(item)
            }
        })
        return newArr // 返回一个新数组
    }

    let list = res.map(item => {
        return item.city
    });
    list = removeDuplicate(list);
    return list;
}
// 通过城市名称查出该城市中景点的门票价格
const getCitysInf = async function (city) {
    return await allLines.findAll({
        attributes: ['address', 'fare_total'],
        where: {
            city
        },
        raw: true
    });
}
// 通过name查询该城市的景点信息
const getCityInfByName = async function (name) {
    return await allLines.findAll({
        attributes: ['dest_name', 'real_city', 'navigation_bar', 'summary_description', 'photos', 'address'],
        where: {
            navigation_bar: {
                // 模糊查询
                [Op.like]: '%' + name + '%'
            }
        },
        raw: true
    }, {
        limit: 20
    });
    /* .then(res => {
         return res
     })
     .catch(e => {
         console.log(e)
     })*/
}

module.exports = {
    returnCity,
    getAllCitys,
    getCitysInf,
    getCityInfByName
}