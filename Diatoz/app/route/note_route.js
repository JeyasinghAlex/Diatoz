const express = require('express');
const router = express.Router();

var note_controller = require('../controller/note_controller.js');

//GET Method:-
router.get('/controller/findAll', note_controller.findAll);

//POST method:-
router.post('/controller/createStudent', note_controller.createStudent);

//UPDATE Method:-
router.post('/controller/deleteStudent', note_controller.deleteStudent);

//DELETE method:-
router.get('/controller/findOne', note_controller.findOne);

module.exports = router;