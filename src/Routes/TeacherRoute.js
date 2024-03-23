const express = require("express");
const { TeacherController, getTutor, deleteTutor,approveTutor ,approveTutors} = require('../Controllers/TeacherController');

const userRoute = express.Router();
const profileImage = require("../Middelwares/multer");

// teacher route sign up
userRoute.post('/signup', profileImage, TeacherController);

userRoute.get("/gettutor", getTutor);
userRoute.get("/approvedTeachers", approveTutor);

userRoute.put("/approveTeacher/:id", approveTutors);


userRoute.delete("/deletetutor/:id", deleteTutor);


module.exports = userRoute;
