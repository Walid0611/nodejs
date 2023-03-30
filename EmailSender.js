var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'walid.meftah06@gmail.com',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'walid.meftah06@gmail.com',
    to: 'walid.meftah0611@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, (err, info)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent:' + info.response);
    }
  });
