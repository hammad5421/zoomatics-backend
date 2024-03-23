const recording = require("../Models/RecordingMod");

const RecordingController = async (req, res) => {
  
  try {
    const { subject, classTeach} = req.body;
  
    // Check if req.file exists and has the 'path' property
    const recordingLec = req.file.filename;

    const result = await recording.create({
      subject,
      classTeach,
      recordingLec : recordingLec,
    });

    
    res.status(201).json({ result});

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
const getRecording = async (req, res) => {
  const student = await recording.find();
  res.status(200).json(student);
};

const deleteRecording= async (req, res) => {

  try {
    const deletedRecord = await recording.findOneAndDelete({ _id: id });
    if (!deletedRecord) {
      return res.status(404).json('Tutor not found');
    }
    res.status(200).json('Tutor deleted successfully');
  } catch (error) {
    res.status(500).json('Internal server error');
  }
};

module.exports =  {RecordingController,getRecording ,deleteRecording};