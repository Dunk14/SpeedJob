var express         = require('express');
var app             = express();
var router          = express.Router();

var mysql = require('mysql');
var confDB = require('../config').database;

var connection = mysql.createConnection(confDB);


//
//  GET /api/students
//
router.get('/', function(req, res) {
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
//  GET /api/students/:id
//
router.get('/count/:id', function(req, res) {

    // Request to get one student
    studentRequest = 'SELECT COUNT(*) as count FROM etudiant WHERE etud_id = '+req.params.id+';';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/students/:id
//
router.get('/:id', function(req, res) {

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
//  GET /api/students/search/:search
//
router.get('/search/:search', function(req, res) {

    // Request to get one student
    studentRequest = 'SELECT * FROM etudiant WHERE etud_lastname = "'+req.params.search+'" OR etud_firstname = "'+req.params.search+'";';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  POST /api/students
//
router.post('/', function(req, res) {

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
//  PUT /api/students
//
router.put('/:id', function(req, res) {

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
//  DELETE /api/students
//
router.delete('/:id', function(req, res) {

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