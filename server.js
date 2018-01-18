const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

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
    console.log('komen we op d esrever?');
    // console.log(req.body.name)
    // console.log(req.body.email)
    // console.log(req.body);
    const {name, email} = req.body;
    transporter.sendMail({
        from: {
            name: name,
            address: email
        },
        to: 'info@magisco.nl',
        subject: 'subscriber',
        text: 'new subscriber'
    }, (err, info) => {
        if(err != null) {
            console.log(err);
            console.log('oops');
            return res.json({success: false});
        } else return res.json({success: true});
    });
});