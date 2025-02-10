import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: process.env.VITE_MAILER_SERVICE,
    auth: {
        user: process.env.VITE_MAILER_EMAIL,
        pass: process.env.VITE_MAILER_SECRET_KEY,
    }
});

app.post('/send-email', async (req, res) => {
    const { to, subject, htmlBody } = req.body;

    try {
        const sentInformation = await transporter.sendMail({
            to,
            subject,
            html: htmlBody,
        });

        console.log(sentInformation);
        res.json({ success: true, message: 'Correo enviado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.VITE_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});