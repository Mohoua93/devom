const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Méthode non autorisée' });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'ssl0.ovh.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Message de ${name} via Devom`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur email :', error);
    res.status(500).json({ success: false, error: "Échec de l'envoi" });
  }
};




