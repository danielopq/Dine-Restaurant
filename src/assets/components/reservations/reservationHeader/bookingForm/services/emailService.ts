import 'dotenv/config';
import nodemailer from 'nodemailer';

interface MailOptions{
    to: string;
    subject: string;
    htmlBody: string;

}

export class EmailService{
    private transporter = nodemailer.createTransport({
        service: process.env.VITE_MAILER_SERVICE,
        auth:{
            user: process.env.VITE_MAILER_EMAIL,
            pass: process.env.VITE_MAILER_SECRET_KEY,
        }
    });

    async sendEmail(options: MailOptions):Promise<boolean> {

        const {to,subject,htmlBody} = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to:to,
                subject: subject,
                html: htmlBody,
            })

            console.log(sentInformation);

            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}