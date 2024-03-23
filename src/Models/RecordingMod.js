const mongoose = require('mongoose');

const RecordingSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    classTeach :{
        type :String,
        required : true
    },
    recordingLec : {
        type :String,
        require: true
    }
});

const recording = mongoose.model('RecordingLecture', RecordingSchema);

module.exports = recording;
