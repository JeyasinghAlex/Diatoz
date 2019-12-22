const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student.controller');

//Find All Details : http://127.0.0.1:5000/student/details
router.get('/details', student_controller.sudent_details);

//Create Student Details : http://127.0.0.1:5000/student/create
router.post('/create', student_controller.student_create);

//Delete Student Details : http://127.0.0.1:5000/student/:id
router.delete('/:id', student_controller.student_delete);

//Update Student Details : http://127.0.0.1:5000/student/:id
router.put('/:id', student_controller.student_update);

module.exports = router;