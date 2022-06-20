const jwt = require('jsonwebtoken');

function createToken(userId, secret, experietion) {
    return jwt.sign({ userId }, secret, {
        expiresIn: experietion
    })
}

function verifyToken(req, res, next) {

    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401);
    // check json web token exists & is verified
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN,
        (err, decoded) => {
            if (err) return res.sendStatus(403);
            req.user = decoded.username;
            next();
        }
    )
}

module.exports = { createToken, verifyToken };