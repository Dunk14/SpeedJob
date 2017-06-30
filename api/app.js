var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Express instance
var app = express();

// Routes
var students = require('./routes/students');
var societies = require('./routes/societies');
var admins = require('./routes/admins');

// JSON Web Tokens
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

// MySQL Configuration
var mysql = require('mysql');
var confDB = require('./config').database;

// config JWT
app.set('superSecret', config.secret);

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Accept, Origin, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var connection = mysql.createConnection(confDB);

app.post('/authenticate', function (req, res) {

    if (req.body) {
        // Request to test credentials
        validationRequest = 'SELECT COUNT(*) as count FROM utilisateur WHERE usr_login = "'+ req.body.login +'" AND usr_password = "'+ req.body.password + '";';

        connection.query(validationRequest, function(err1, res1) {
            if (!err1) {
                if (res1[0].count === 1) {
                    // Request to get user ID
                    uidRequest = 'SELECT uid FROM utilisateur WHERE usr_login = "'+ req.body.login +'" AND usr_password = "'+ req.body.password + '";';

                    connection.query(uidRequest, function(err2, res2) {
                        if (!err2) {
                            // if user is found and password is right
                            // create a token
                            var token = jwt.sign({uid: res2[0].uid}, app.get('superSecret'), {
                                expiresIn: '24h' // expires in 24 hours
                            });

                            // return the information including token as JSON
                            res.json({
                                success: true,
                                uid: res2[0].uid,
                                token: token
                            });
                        } else {
                            console.log(err2);
                        }
                    });


                } else {
                    res.json({
                        success: false,
                        message: "Provided credentials aren't right"
                    });
                }


            } else {
                console.log(err1);
            }
        });
    }

});

app.use('/api', function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

app.use('/api/students', students);
app.use('/api/societies', societies);
app.use('/api/admins', admins);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
