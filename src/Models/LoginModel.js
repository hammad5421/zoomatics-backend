const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchemaLogin = new mongoose.Schema({
    // Your other user schema fields...
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // ... other fields ...
});

// Method to compare passwords
userSchemaLogin.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const UserLogin = mongoose.model('Login', userSchemaLogin);

module.exports = UserLogin;
