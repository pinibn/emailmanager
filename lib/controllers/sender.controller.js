const nodemailer = require('nodemailer');
const config = require('../../config/default');



exports.sendEmail = (req, res) => {
    const e_addr = req.body.email_address; // in case of 'email_address' is undefined, the schema will reject the insertion (field is mandatory)
    const e_subject = req.body.email_subject; // in case of 'email_content' is undefined, the schema will reject the insertion (field is mandatory)
    const e_cntnt = req.body.email_content; // in case of 'email_content' is undefined, the schema will reject the insertion (field is mandatory)

    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.gmail_account.username,
        pass: config.gmail_account.password
    }
    });

    var mailOptions = {
    from: 'test22cymu@gmail.com',
    to: e_addr,
    subject: e_subject,
    text: e_cntnt
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    }); 

    res.sendStatus(200);
}