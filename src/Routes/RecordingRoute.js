const express = require("express");

const  {RecordingController,getRecording } = require("../Controllers/RecordingCon");

const recordingMiddleware = require("../Middelwares/videoMulter");

const router = express.Router();
router.post('/upload', recordingMiddleware,  RecordingController);
router.get('/getupload', getRecording );



module.exports = router;
