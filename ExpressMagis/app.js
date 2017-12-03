var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

var transporter = nodemailer.createTransport({
    host: 'smtp.hostnet.nl',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: 'info@magisco.nl',
        pass: 'A0869F8'
    }
});

app.post('/send', function (req, res) {
    const {name, email, subject, message} = req.body;
    transporter.sendMail({
        from: {
            name: name,
            address: email
        },
        to: 'millen_vanosch@hotmail.com',
        subject: subject,
        text: message
    }, (err, info) => {
        if(err != null) {
            console.log(err);
            console.log('oops');
            return res.json({success: false});
        }
    });
    return res.json({success: true});
});

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
