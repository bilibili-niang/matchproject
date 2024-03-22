// schema,将csv数据写入mysql
const {DataTypes} = require('sequelize')
const seq = require('../db/seq')
const allLines = seq.define('allLines', {
    dest_id: {
        type: DataTypes.STRING, allowNull: true,
    }, dest_name: {
        type: DataTypes.STRING, allowNull: true,
    }, dest_en_name: {
        type: DataTypes.STRING, allowNull: true,
    }, navigation_bar: {
        type: DataTypes.STRING, allowNull: true,
    }, real_city: {
        type: DataTypes.STRING, allowNull: true,
    }, city: {
        type: DataTypes.STRING, allowNull: true,
    }, special_remind: {
        type: DataTypes.STRING, allowNull: true,
    }, photos: {
        type: DataTypes.STRING, allowNull: true,
    }, score: {
        type: DataTypes.STRING, allowNull: true,
    }, ranking: {
        type: DataTypes.STRING, allowNull: true,
    }, recommend_playtime: {
        type: DataTypes.STRING, allowNull: true,
    }, comment_num: {
        type: DataTypes.STRING, allowNull: true,
    }, lat: {
        type: DataTypes.STRING, allowNull: true,
    }, lng: {
        type: DataTypes.STRING, allowNull: true,
    }, percent: {
        type: DataTypes.STRING, allowNull: true,
    }, travelbook_num: {
        type: DataTypes.STRING, allowNull: true,
    }, summary_description: {
        type: DataTypes.STRING, allowNull: true,
    }, address: {
        type: DataTypes.STRING, allowNull: true,
    }, phone: {
        type: DataTypes.STRING, allowNull: true,
    }, website: {
        type: DataTypes.STRING, allowNull: true,
    }, opening_hours: {
        type: DataTypes.STRING, allowNull: true,
    }, admission_ticket: {
        type: DataTypes.STRING, allowNull: true,
    }, tourist_season: {
        type: DataTypes.STRING, allowNull: true,
    }, traffic_guide: {
        type: DataTypes.STRING, allowNull: true,
    }, tips: {
        type: DataTypes.STRING, allowNull: true,
    }, grade: {
        type: DataTypes.STRING, allowNull: true,
    }, time_reference: {
        type: DataTypes.STRING, allowNull: true,
    }, url: {
        type: DataTypes.STRING, allowNull: true,
    }, year: {
        type: DataTypes.STRING, allowNull: true,
    }, old_1: {
        type: DataTypes.STRING, allowNull: true, comments: '2019年票价'
    }, old_2: {
        type: DataTypes.STRING, allowNull: true, comments: '2020年票价'
    }, old_3: {
        type: DataTypes.STRING, allowNull: true, comments: '2021年票价'
    }, old_4: {
        type: DataTypes.STRING, allowNull: true, comments: '2022年票价'
    }, fare_1: {
        type: DataTypes.STRING, allowNull: true, comments: '2022年一月'
    }, fare_2: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_3: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_4: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_5: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_6: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_7: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_8: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_9: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_10: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_11: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_12: {
        type: DataTypes.STRING, allowNull: true,
    }, fare_total: {
        type: DataTypes.STRING, allowNull: true,
        comments: '2022年总票价'
    },
    provinceName: {
        type: DataTypes.STRING, allowNull: true,
    }
}, {
    // 在这里对sequelize自带时间戳开关进行设置，默认为true
    timestamps: false
})

/*allLines.sync({
    // force: 'true'
})*/

module.exports = allLines