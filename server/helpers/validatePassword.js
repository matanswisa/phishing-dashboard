const bcrypt = require("bcrypt");


async function checkUserPassword(loginPassword, dbPassword) {
    return await bcrypt.compare(loginPassword, dbPassword);
}

module.exports = checkUserPassword