const message = require('../schema/message');

class MessageMiddleware {
    async addMessage(word) {
        return await message.create({
            word
        }, {
            raw: true
        });
    }
}

module.exports = new MessageMiddleware();