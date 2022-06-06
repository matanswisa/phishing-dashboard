const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    mail: { type: 'string', isRequired: true },
    password: { type: 'string', isRequired: true }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;