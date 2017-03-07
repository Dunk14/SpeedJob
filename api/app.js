var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var account = require('./routes/account');

var app = express();

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

var mysql = require('mysql');
var confBDD = {
    host     : 'localhost',
    user     : 'speedjob',
    password : 'searching4jobs',
    database : 'speedjob',
    charset  : 'utf8_general_ci'
};

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

app.get('', function (req, res, next) {
    res.send("Hello !");
});

app.post('/authenticate', function (req, res, next) {

    if (req.body) {
        var connection = mysql.createConnection(confBDD);

        validationRequest = 'SELECT COUNT(*) as count FROM utilisateur WHERE usr_login = "'+ req.body.login +'" AND usr_password = "'+ req.body.password + '";';

        connection.query(validationRequest, function(err1, res1, fields) {
            if (!err1) {
                if (res1[0].count == 1) {
                    uidRequest = 'SELECT uid FROM utilisateur WHERE usr_login = "'+ req.body.login +'" AND usr_password = "'+ req.body.password + '";';

                    connection.query(uidRequest, function(err2, res2, fields) {
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
                    res.json(rows);
                }


            } else {
                console.log(err1);
            }
        });
    }

});

app.use('/account', account);

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
  res.render('error');
});

module.exports = app;
