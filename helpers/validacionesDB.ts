import { sendEmail } from "../mailer/mails";
import Usuario, { IUsuario } from "../models/usuario"

export const existeEmail = async (email:string): Promise<void> => {

    const existeEmail: IUsuario | null = await Usuario.findOne({email});

    if (existeEmail && existeEmail.verified) {
        throw new Error(`El correo ${email} ya está registrado`)
    }

    if (existeEmail && !existeEmail.verified) {
        await sendEmail(email, existeEmail.code as string)
        throw new Error(`El usuario ya está registrado. Se envío nuevamente el código de verificación a ${email}`)
    }

}