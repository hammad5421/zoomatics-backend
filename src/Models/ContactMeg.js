const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message : {
        type :String,
        require: true
    }
});

const Message = mongoose.model('Query', QuerySchema);

module.exports = Message;
