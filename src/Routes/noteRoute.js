const express = require ("express");
const { getNotes, createNote, deleteNote, updateNote} = require("../Controllers/NoteCont");
const noteRoute = express.Router();
const auth = require ("../Middelwares/auth");

noteRoute.get('/', auth,  getNotes);
noteRoute.post('/', auth, createNote);
noteRoute.delete('/:id', auth, deleteNote);
noteRoute.put('/:id', auth, updateNote);


module.exports = noteRoute;