const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: 'ssl0.ovh.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.sendMail({
  from: process.env.MAIL_USER,
  to: process.env.MAIL_USER, // s’envoie à soi-même pour tester
  subject: 'Test depuis Devom',
  text: 'Ceci est un test de mail direct depuis le backend.',
}, (err, info) => {
  if (err) {
    return console.error('Erreur envoi :', err);
  }
  console.log('Email envoyé :', info.response);
});
