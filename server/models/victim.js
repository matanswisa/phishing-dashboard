const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const victimSchema = new Schema({
    mail: { type: 'string', isRequired: true },
    content: { type: 'string', isRequired: true }, //content of a phishing mail
    status: { type: 'boolean', isRequired: true } // status of phishing
}, { timestamps: true });

const PhishingVictim = mongoose.model('phishing-victim', victimSchema);

module.exports = PhishingVictim;