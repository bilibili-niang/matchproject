const allLines = require('../schema/citys')

// 通过address获取该景点的信息
const getDetailByAddress = async function (address) {
    const res = await allLines.findOne({
        // allLines.findAll({
        where: {
            dest_name: address
        },
        raw: true
    })
    /*  .then(res => {
          console.log(res)
      })
      .catch(e => {
          console.log(e)
      })*/

    // console.log("res:")
    // console.log(res)
    return res;

}

module.exports = {
    getDetailByAddress,

}