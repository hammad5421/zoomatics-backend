const express = require("express");
const StudentRoute = express.Router();
const { Student, getStudent, deleteStudent } = require("../Controllers/StudentController");

// student route sign up 
StudentRoute.post('/signup', Student);

StudentRoute.get('/getstd', getStudent);

StudentRoute.delete("/deletestudent/:id", deleteStudent);


module.exports = StudentRoute;
