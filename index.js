const express = require('express');
const bodyParser = require('body-parser');
const Client = require('node-rest-client').Client; 
var client = new Client();
const student = require('./routes/student.route');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use('/student', student);

//Free API Call : http://127.0.0.1:5000/freeData
app.get('/freeData', (req, res)=>{
    client.get('http://dummy.restapiexample.com/api/v1/employees', (data, responce)=>{
        res.send(JSON.parse(data.toString()));
        //console.log(responce);
    });
 });

var port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`app running - ${port}`);
})