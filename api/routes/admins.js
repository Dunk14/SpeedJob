var express         = require('express');
var app             = express();
var router          = express.Router();

var mysql = require('mysql');
var confDB = require('../config').database;

var connection = mysql.createConnection(confDB);

//
//  GET /api/admin
//
router.get('/', function(req, res) {
    // Request to get all admins
    adminsRequest = 'SELECT * FROM administrateur;';

    connection.query(adminsRequest, function(err, res1) {
        if (!err) {
            res.json(res1);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/admin/count/:id
//
router.get('/count/:id', function(req, res) {

    // Request to get one admin
    adminsRequest = 'SELECT count(*) as count FROM administrateur WHERE admin_id = '+req.params.id+';';

    connection.query(adminsRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/admin/count/:id
//
router.get('/:id', function(req, res) {

    // Request to get one student
    adminsRequest = 'SELECT * FROM administrateur WHERE admin_id = '+req.params.id+';';

    connection.query(adminsRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/societies/search/:search
//
router.get('/search/:search', function(req, res) {

    // Request to get one student
    studentRequest = 'SELECT * FROM entreprise WHERE entr_lastname = "'+req.params.search+'" OR etud_firstname = "'+req.params.search+'";';

    connection.query(studentRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  POST /api/societies
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
//  PUT /api/societies
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
//  DELETE /api/societies
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