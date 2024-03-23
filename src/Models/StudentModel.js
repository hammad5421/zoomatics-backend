const mongoose = require('mongoose');

const StudentSchemaSignUp = new mongoose.Schema({
    fullName: {
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
    school: {
        type: String,
        required: true
    },
    phone : {
        type : String,
        required : true
    },
    grade : {
        type :String,
        require: true
    }
});

const StudentMod = mongoose.model('Students', StudentSchemaSignUp);

module.exports = StudentMod;
