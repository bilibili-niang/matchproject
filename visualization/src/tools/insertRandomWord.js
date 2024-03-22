//　插入随机留言
const {
    addMessage
} = require('../middleware/message.middleware');
const {teaComments} = require('./randomData');

function random(num) {
    for (let i = 0; i < num; i++) {
        addMessage(teaComments[randomNum(0, teaComments.length)])
            .then(res => {
                console.log('成功')
            })
            .catch(e => {
                console.log('失败')
                console.log(e)
            })

    }
}

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

random(1000);