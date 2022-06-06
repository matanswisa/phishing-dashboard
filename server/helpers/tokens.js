const jwt = require('jsonwebtoken');

function createToken(userId, secret, experietion) {
    return jwt.sign({ userId }, secret, {
        expiresIn: experietion
    })
}

module.exports = createToken;