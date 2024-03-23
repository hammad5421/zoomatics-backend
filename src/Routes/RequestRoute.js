const express = require('express');
const router = express.Router();
const { bookTeacher } = require('../Controllers/BookReqCont');

// POST route to book a teacher
router.post('/book', bookTeacher);

module.exports = router;
