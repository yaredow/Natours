const nodemailer = require('nodemailer');
const { options } = require('../routes/userRoutes');

const sendeEmail = (options) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
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
    text: options.text,
  };

  // Actually send the email
};
