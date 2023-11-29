const nodemailer = require('nodemailer');

const sendeEmail = async (options) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      password: process.env.EMAIL_PASSWORD,
    },
  });
  // Define the email option
  const mailOptions = {
    from: 'Yared yilma <yaredyilma11@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  // Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendeEmail;
