const nodemailer = require("nodemailer");

const sendMail = async () => {
    // create reusable transporter object using the default SMTP transport
    let testAccount = await nodemailer.createTestAccount();

    console.log(testAccount.user, testAccount.pass);

    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        service: 'Outlook365',
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.OFFICE_EMAIL,
            pass: process.env.OFFICE_PASS
        },
    });

    const mailContent = {
        from: `${process.env.OFFICE_EMAIL}`,
        to: `matanswisa01@gmail.com, ${process.env.EMAIL_USERNAME}`,
        subject: "Free Iphone",
        text: "Press this link to get yourself a brand new iphone",
        html: `<a href='http://localhost:8080/api/userInfo/'>Press here to receive your new Iphone!</a>`,
    };
    console.log(mailContent);
    // send mail with defined transport object
    let email = await transporter.sendMail(mailContent, (error, info) => {
        if (error) {
            return console.log(error);
        }
    });
    console.log("Email: " + email + " was sent.")
}

module.exports = { sendMail };