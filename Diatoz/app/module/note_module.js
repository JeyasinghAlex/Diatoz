const express  = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tutorialkart');

const noteSchma = mongoose.Schema({
    id : String,
    name : String,
    age : Number
});

module.exports = mongoose.model('Note', noteSchma);