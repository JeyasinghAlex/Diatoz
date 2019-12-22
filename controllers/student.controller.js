
var db;
var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017", function (err, client) {
        
         db = client.db('studentbase');
});


exports.student_create = function(req, res){
        db.collection('students', function (err, collection) {
            collection.insert({ id: req.body.id, firstName: req.body.firstname, lastName:req.body.lastname,age:req.body.age});
            db.collection('students').count(function (err, count) {
                if (err) throw err;
                res.send('Total Rows: ' + count+" created");
            });
        });
}

exports.sudent_details = function(req, res){
    res.send("success");
        db.collection('students', function (err, collection) {
        collection.find().toArray(function(err, result){
            //collection.findOne({id : req.body.id}, ()=>)
            if(err) throw err;    

        
         });
    });    
}

exports.student_update = function(req, res){
    db.collection('students', function (err, collection) {
            collection.updateMany({id:req.params.id}, { $set: { firstName: req.body.firstname, lastName: req.body.lastname,age:req.body.age} }, 
                                                     function(err, result){
                                                                if(err) throw err;    
                                                                res.send("updated");
             });
        });    
}

exports.student_delete = function (req, res) {
    db.collection('students', function (err, collection) {
        collection.removeMany({id:req.params.id}, 
                                                 function(err, result){
                                                            if(err) throw err;    
                                                            res.send("Succesfully Deleted");
         });
    });    
};

