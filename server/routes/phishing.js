const { Router } = require('express');
const PhishingVictim = require('../models/victim');

const router = Router();

/***
 * This route responsible to update the victim's phishing status
 */
router.get('/userInfo/:mail', async (req, res) => {
    const { mail } = req.params;
    await PhishingVictim.findOneAndUpdate({ mail }, { status: true });
    res.send('<b>404 Page not found</b>'); // to fake the victim
})




module.exports = router;