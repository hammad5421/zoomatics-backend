const express = require('express');
const router = express.Router();
const { ContactControl, getmsg, deleteMsg } = require('../Controllers/ContactController'); // Import your contact controller

// Define routes
router.post('/msg', ContactControl);
router.get('/getmsg', getmsg);
router.delete('/msg/:id', deleteMsg);

module.exports = router;
