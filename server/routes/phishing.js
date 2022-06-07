const { Router } = require('express');
const PhishingVictim = require('../models/victim');

const router = Router();

/***
 * This route responsible to update the victim's phishing status
 */


router.get('/userInfo/', (req, res) => {
    // const { mail } = req.auth;
    res.render('phishingForm'); // to fake the victim
})

router.post('/signInForm', async (req, res) => {
    const { mail } = req.body;
    await PhishingVictim.findOneAndUpdate({ mail }, { status: true });
    res.status(200).send({ message: "email saved!" });
})




module.exports = router;