import {Router} from "express"
import { crearCompra, getcompras } from "../controllers/compras";
import validarJWT from "../middlewares/validarJWT";
import { recolectarErrores } from "../middlewares/recoletarErrores";
import { isverificado } from "../middlewares/validarVerificado";
import { check } from "express-validator";


const router = Router();


router.get("/",
[
    validarJWT,
    recolectarErrores
]

,getcompras)

router.post("/",
    [
      validarJWT,
      isverificado,
      check("precio", "El precio es obligatorio").not().isEmpty(),
      check("total", "El precio total es obligatorio").not().isEmpty(),
      check("informacionEnvio", "Los detalles de envío son obligatorios").not().isEmpty(),
      check("item", "El array de productos es obligatorio").not().isEmpty(),
    ],
    crearCompra)

export default router