import { Router } from "express";
import { login, registro, verificarUsuario } from "../controllers/auth";
import {check} from "express-validator";
import { recolectarErrores } from "../middlewares/recoletarErrores";
import { existeEmail } from "../helpers/validacionesDB";
const router = Router()

router.post(
    "/registro",
[
check("nombre", "el nombre es obligatorio").not().isEmpty(),
check("email", "El email es obligatotrio").isEmail(),
check("contraseña", "El contraseña debe ser de 6 caracteres minimo").isLength({
    min: 6
}),
check("email").custom(existeEmail),

recolectarErrores,
],

registro
);

router.post(
    "/login",
    [
        check("email", "El mail es obligatorio").not().isEmpty(),
        check("email", "El mail no es válido").isEmail(),
        check("contraseña", "El contraseña debe ser de 6 caracteres minimo").isLength({
            min: 6
        }),
        recolectarErrores
    ],
    login
);

router.patch(
    "/verifica",
    [
        check("email", "El mail es obligatorio").not().isEmpty(),
        check("email", "El mail no es válido").isEmail(),
        check("code").not().isEmpty(),
        recolectarErrores
    ],
    verificarUsuario
)

export default router