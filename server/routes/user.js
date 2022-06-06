const { Router } = require('express');
const checkUserPassword = require('../helpers/validatePassword');
const createToken = require('../helpers/tokens');
const User = require('../models/user');
const bcrypt = require('bcrypt');


const router = Router();
const saltRounds = 10;

router.post('/login', async (req, res) => {
    try {
        const { mail, password } = req.body;
        let foundUser = await User.findOne({ mail })
        if (!(foundUser && await checkUserPassword(password, foundUser.password))) {
            return res.status(400).send({ message: 'Invalid username or password', sucess: false });
        }

        if (!(process.env.ACCESS_TOKEN.length && process.env.REFRESH_TOKEN.length)) {
            return res.status(500).send('Something went wrong');
        }

        const accessToken = createToken(foundUser.mail, process.env.ACCESS_TOKEN, '30s');
        const refreshToken = createToken(foundUser.mail, process.env.ACCESS_TOKEN, 60 * 60 * 60 * 24 * 1000);

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 60 * 60 * 1000 * 24 });
        res.status(200).send({ success: true, accessToken, message: "user logged in" });
    } catch (err) {
        res.json({ success: false, message: "Something went wrong" });
    }
});


module.exports = router;