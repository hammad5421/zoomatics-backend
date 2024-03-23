const UserSignup = require("../Models/TeacherModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const TeacherController = async (req, res) => {
  const { username, email, password, subject, experience, areaLocation, classTech, TeachMethod, qualification } = req.body;

  try {
    const existingUser = await UserSignup.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if req.file exists and has the 'path' property
    const profilePic = req.file.filename;
    
    const result = await UserSignup.create({
      email,
      password: hashedPassword,
      username,
      subject,
      experience,
      areaLocation,
      classTech,
      TeachMethod,
      qualification,
      profilePic, // Ensure a value for profilePic
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

const getTutor = async (req, res) => {
  const tutor = await UserSignup.find();
  res.status(200).json(tutor);
};

const deleteTutor = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTutor = await UserSignup.findOneAndDelete({ _id: id });
    if (!deletedTutor) {
      return res.status(404).json('Tutor not found');
    }
    res.status(200).json('Tutor deleted successfully');
  } catch (error) {
    res.status(500).json('Internal server error');
  }
};
const approveTutor = async (req, res) => {
  try {
    const teachers = await UserSignup.find({ status: 'Approved' });
    res.json(teachers);
  } catch (error) {
    console.error("Error fetching teachers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const approveTutors = async (req, res) => {
  try {
    const teacherId = req.params.id;
    // Check if the provided ID is valid
    if (!teacherId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ error: 'Invalid Teacher ID' });
    }
    // Find the teacher by ID and update the status along with the approveDate
    const updatedTeacher = await UserSignup.findByIdAndUpdate(
      teacherId,
      { 
        $set: { 
          status: 'Approved',
          approveDate: new Date() // Set approveDate to current date
        }
      },
      { new: true }
    );
    // Check if the teacher was found and updated
    if (!updatedTeacher) {
      return res.status(404).json({ error: 'Teacher not found' });
    }
    res.status(200).json('Tutor approved successfully');
  } catch (error) {
    console.error("Error updating teacher status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




module.exports = { TeacherController, getTutor, deleteTutor ,approveTutor,approveTutors};