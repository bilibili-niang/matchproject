const {
    addMessage
} = require('../middleware/message.middleware');

class MessageController {
    async returnAdd(ctx) {
        console.log('addMessage')
        const word = ctx.request.body.word || '你好';
        const res = await addMessage(word)
        console.log("res:")
        // 如果成功返回创建的id,反之,返回0,0id是不可能存在的
        const id = (await res).dataValues.id || 0;
        if (id != 0) {
            ctx.body = {
                code: 200,
                success: true
            }
        } else {
            ctx.body = {
                code: 201,
                success: false
            }
        }
    }

}

module.exports = new MessageController();