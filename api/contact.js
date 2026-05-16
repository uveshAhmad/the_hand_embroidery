import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER,
  passExists: !!process.env.SMTP_PASS,
});


const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 587,
  secure: false,
  requireTLS: true,

  auth: {
    user: process.env.SMTP_USER.trim(),
    pass: process.env.SMTP_PASS.trim(),
  },

  tls: {
    rejectUnauthorized: false,
  },

  authMethod: "LOGIN",
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { fullName, email, phone, typeOfEnquiry, message } = req.body;

  // Validation
  if (!fullName || !email || !phone) {
    return res.status(400).json({ error: 'Full name, email, and phone are required.' });
  }

  try {
    const mailOptions = {
      from: `"${fullName}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL, // your registered email
      subject: `New Enquiry from ${fullName}: ${typeOfEnquiry || 'General'}`,
      text: `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Type of Enquiry: ${typeOfEnquiry || 'Not specified'}
        
        Message:
        ${message || 'No message provided.'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
