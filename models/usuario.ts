import { Model, Schema, model } from "mongoose";
import { ROLES } from "../helpers/constantes";


export interface IUsuario {
    nombre: string;
    email: string;
    contrasena: string;
    rol?: string;
    code?: string;
    verified?: string;
};


const UserSchema = new Schema<IUsuario>({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    email: {
        type: String,
        required: [true, "El correo es obligatorio"]
    },
    contrasena: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    rol: {
        type: String,
        default: ROLES.user
    },
    code: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    }
});


UserSchema.methods.toJSON = function() {
    const {__v, contrasena, _id, code, ...usuario} = this.toObject();
    return usuario
}


const Usuario: Model<IUsuario> = model<IUsuario>("Usuario", UserSchema);

export default Usuario;