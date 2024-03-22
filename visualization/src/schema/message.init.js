// 留言的数据表
const {DataTypes} = require('sequelize')
const seq = require('../db/seq')
const message = seq.define('message', {
    word: {
        type: DataTypes.STRING, allowNull: true,
        comments: '留言内容'
    }
})

message.sync({
     force: 'true'
})

module.exports = message

