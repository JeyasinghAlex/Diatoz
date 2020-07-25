const express = require('express');
const Client = require('node-rest-client').Client;
const MongoClient = require('mongodb').MongoClient;
const noteRouter = require('./app/route/note_route.js');
client = new Client();
var app = express();
app.use('/student', noteRouter);

//DB Connection :
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, (err, db)=>{
    if(err) throw err;

    console.log("Successfully DB Created");
    db.close();
});

app.get('/freeData', (req, res)=>{
   client.get('http://dummy.restapiexample.com/api/v1/employees', (data, responce)=>{
       res.send(JSON.parse(data.toString()));
       //console.log(responce);
   });
});

var note_controller = require('./app/controller/note_controller.js');
// app.get('/controller/findAll', note_controller.findAll);
//app.get('/controller/findOne', note_controller.findOne);

var port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`app running ${port}`);
})