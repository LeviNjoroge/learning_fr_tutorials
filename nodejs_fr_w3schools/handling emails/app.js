require('dotenv').config();
const nodemailer = require('nodemailer');

const email_address = process.env.EMAIL_ADDRESS;
const password = process.env.PASSWORD;

//receivers email
var mail = "levynjoroge1@gmail.com";


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email_address,
        pass: password
    }
})

var mailOptions = {
    from: email_address,
    to: mail,
    subject: "Sending an Email via Node.js",
    text:"This should be easy"
}

transporter.sendMail(mailOptions);