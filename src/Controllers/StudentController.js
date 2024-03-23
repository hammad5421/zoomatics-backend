const StudentMod = require("../Models/StudentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const Student = async (req, res) => {
  const { fullName, email, password, phone , school , grade  } = req.body;

  try {
    const existingUser = await StudentMod.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // Check if req.file exists and has the 'path' property

    const result = await StudentMod.create({
      fullName,
      email,
      password,
      school,
      grade,
      phone,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};


const getStudent = async (req, res) => {
  const student = await StudentMod.find();
  res.status(200).json(student);
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTutor = await StudentMod.findOneAndDelete({ _id: id });
    if (!deletedTutor) {
      return res.status(404).json('Tutor not found');
    }
    res.status(200).json('Tutor deleted successfully');
  } catch (error) {
    res.status(500).json('Internal server error');
  }
};

module.exports = { Student, getStudent, deleteStudent };