// city表中的省会信息
const {DataTypes} = require('sequelize')
const seq = require('../db/seq')

const citys = seq.define('citys', {
    number_1: {
        type: DataTypes.STRING,
        allowNull: true,
        comments: '2019年的人数'
    },
    number_2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    number_3: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    number_4: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    number_5: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        comments: '省会名称'
    },
    hot: {
        type: DataTypes.STRING,
        allowNull: true,
        comments: '省会热度'
    }
}, {
    // 在这里对sequelize自带时间戳开关进行设置，默认为true
    timestamps: false
})


citys.sync({
    force: 'true'
})

module.exports = citys