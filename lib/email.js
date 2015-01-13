var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gmail.user@gmail.com',
        pass: 'A single username and password'
    }
});

function SendMail(msg, subject){
    var mailOptions = {
        from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
        to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
        subject: 'EnviGrow: ' + subject, // Subject line
        text: msg
    };  

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        }
    });
}

module.exports = SendMail;