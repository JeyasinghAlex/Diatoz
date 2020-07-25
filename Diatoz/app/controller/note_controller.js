
const Note = require('../module/note_module.js');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student_database";

//GET data
exports.findAll = function(req, res){
   
MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  db.collection("myCollection").findAll({}).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
    db.close();
  });
});
};

//POST data
exports.createStudent = function(req, res){
    res.send("I am Create");
}

//UPDATE data
exports.deleteStudent = function(req, res){
    res.send("I am Update");
}

//DELETE data
exports.findOne = function(req, res){
    res.send("I am Delete");
}
