const express = require('express');
const mongoose = require('mongoose');
const TeacherRoute = require('./src/Routes/TeacherRoute');
const noteRoute = require('./src/Routes/noteRoute');
const dotenv = require("dotenv");
require('dotenv').config();
const cors = require("cors");
const StudentRoute = require('./src/Routes/StudentRoute');
const LoginRoute = require('./src/Routes/Login');
const ContactRoute = require('./src/Routes/ContactRoute');
const router = require('./src/Routes/RecordingRoute');
const RequestRoute = require('./src/Routes/RequestRoute');
const app = express();

app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
  // console.log("HTTP Method - " + req.method + ", URL - " + req.url );
  next();
});
app.use(express.static('public'));
app.use('/teacher', TeacherRoute);
app.use('/Student', StudentRoute);
app.use('/user', LoginRoute);
app.use('/Contact', ContactRoute);
app.use('/Lecture', router);
app.use('/Booking', RequestRoute);

mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });
});
console.log('MongoDB URI:', process.env.MONGODB_URI);

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
