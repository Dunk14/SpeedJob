var express         = require('express');
var router          = express.Router();

var mysql = require('mysql');
var confBDD = {
    host     : 'localhost',
    user     : 'speedjob',
    password : 'searching4jobs',
    database : 'speedjob',
    charset  : 'utf8_general_ci'
};

var connection = mysql.createConnection(confBDD);

//
//  GET /api/accounts/students
//
router.get('/students', function(req, res) {

    // Request to get all students
    studentsRequest = 'SELECT * FROM etudiant;';

    connection.query(studentsRequest, function(err, res1) {
        if (!err) {
            res.json(res1);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/accounts/students/:id
//
router.get('/students/:id', function(req, res) {

    // Request to get one student
    studentRequest = 'SELECT * FROM etudiant WHERE etud_id = '+req.params.id+';';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/accounts/students/search/:search
//
router.get('/students/search/:search', function(req, res) {

    // Request to get one student
    studentRequest = 'SELECT * FROM etudiant WHERE etud_id = '+req.params.id+';';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  POST /api/accounts/students
//
router.post('/students/', function(req, res) {

    // Request to create a new user
    // TODO
    /*studentRequest = 'SELECT * FROM etudiant WHERE etud_id = '+req.params.id+';';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });*/
    res.send("POST");
});

//
//  PUT /api/accounts/students
//
router.put('/students/:id', function(req, res) {

    // Request to update a user
    // TODO
    /*studentRequest = 'SELECT * FROM etudiant WHERE etud_id = '+req.params.id+';';

     connection.query(studentRequest, function(err, res1) {
     if (!err) {
     res.json(res1[0]);
     } else {
     console.log(err);
     }
     });*/
    res.send("PUT");
});

//
//  DELETE /api/accounts/students
//
router.delete('/students/:id', function(req, res) {

    // Request to update a user
    // TODO
    /*studentRequest = 'SELECT * FROM etudiant WHERE etud_id = '+req.params.id+';';

     connection.query(studentRequest, function(err, res1) {
     if (!err) {
     res.json(res1[0]);
     } else {
     console.log(err);
     }
     });*/
    res.send("DELETE");
});

module.exports = router;