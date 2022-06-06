const nodemailer = require("nodemailer");

const createMailerTransporter = () => {
    return nodemailer.createTransport({
        // host: "smtp.gmail.com",
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
}

const sendMail = async () => {
    // create reusable transporter object using the default SMTP transport
    let transporter = createMailerTransporter();

    // send mail with defined transport object
    let email = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: `matanswisa01@gmail.com, ${process.env.EMAIL_USERNAME}`, // list of receivers
        subject: "Free Iphone", // Subject line
        text: "Press this link to get yourself a brand new iphone", // plain text body
        html: "<b>Some content in html</b>", // html body
    });

    console.log("Email: " + email.messageId + " was sent.")
}

module.exports = { sendMail };