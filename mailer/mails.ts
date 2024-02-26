import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'jennifercarrasco.lp@gmail.com',
        pass: 'omwu szmm bfvz ptzj'
    },
    from: 'jennifercarrasco.lp@gmail.com'
})

export const sendEmail = async (to: string, code: string): Promise<void> => {

    const mailOptions = {
        from: '"TuTicket"jennifercarrasco.lp@gmail.com',
        to,
        subject: 'Código de verificación para TuTicket',
        text: `
            Llegó tu codigo para TuTicket.
            El código es ${code}
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado");   
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error)
    }

}