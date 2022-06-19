import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "1a3371e5e7bd10",
    pass: "1d2cbfbdaa5ead"
    }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Hitalo Chaves <hytalosantos26@gmail.com>",
      subject,
      html: body,
    });
  }
}