var express         = require('express');
var app             = express();
var router          = express.Router();

var mysql = require('mysql');
var confDB = require('../config').database;

var connection = mysql.createConnection(confDB);

//
//  GET /api/societies
//
router.get('/', function(req, res) {
    // Request to get all societies
    societiesRequest = 'SELECT * FROM entreprise;';

    connection.query(societiesRequest, function(err, res1) {
        if (!err) {
            res.json(res1);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/societies/count/:id
//
router.get('/count/:id', function(req, res) {

    // Request to get one society
    societiesRequest = 'SELECT count(*) as count FROM entreprise WHERE uid = '+req.params.id+';';

    res.json({
        id: req.params.id
    });

    connection.query(societiesRequest, function(err, res1) {
        if (!err) {
            res.json(res1[0]);
        } else {
            console.log(err);
        }
    });

});

//
//  GET /api/societies/count/:id
//
router.get('/:id', function(req, res) {

    // Request to get one society
    societiesRequest = 'SELECT * FROM entreprise WHERE uid = '+req.params.id+';';

    connection.query(societiesRequest, function(err, res1) {
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

    // Request to get one society
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
router.put('/:uid', function(req, res) {

    // Request to update a user
    // TODO

    let updateFields = "";

    for(field in req.body)
    {
        updateFields += ' ' + field + " = '" + req.body[field] + "',";
    }


    updateFields = updateFields.substring(0, updateFields.length-1);

    societyRequest = 'UPDATE entreprise SET' +
        updateFields +
        ' WHERE uid = '+req.params.uid  ;

   // res.json({query: societyRequest});

     connection.query(societyRequest, function(err, res1) {
     if (!err) {
        res.json({success: true});
     } else {
         res.json({success: false});
     }
     });
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