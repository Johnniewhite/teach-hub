const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-confirmation-email', async (req, res) => {
  const { email, name, amount, reference } = req.body;

  // Create a transporter using your SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: email,
    subject: 'Payment Confirmation',
    text: `Dear ${name},\n\nThank you for your payment of ₦${amount}. Your transaction was successful.\n\nReference: ${reference}\n\nBest regards,\nTED Circle Social Innovators Programme`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Confirmation email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending confirmation email' });
  }
});

module.exports = router;