const mongoose = require('mongoose');

const userSchemaSignUp = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    experience : {
        type :String,
        require: true
    },
    areaLocation: {
        type: String,
        required: true
    },
    classTech: {
        type: String,
        required: true
    },
    TeachMethod: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    }
});

const UserSignup = mongoose.model('Teachers', userSchemaSignUp);

module.exports = UserSignup;
