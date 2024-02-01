import { Router } from "express";
import { postNewIssue } from "../controllers/issues";
import validarJWT from "../middlewares/validarJWT";
import { isAdmin } from "../middlewares/validarRol";

import { check } from "express-validator";
import { recolectarErrores } from "../middlewares/recoletarErrores";

const router = Router();

router.post("/",
    [
       validarJWT,
        isAdmin,
        check("title", "El título es obligatorio").not().isEmpty(),
        check("description", "La descripcion es obligatoriia").not().isEmpty(),
        check("priority", "La prioridad es obligatoria").not().isEmpty(),
        recolectarErrores
    ],
    postNewIssue
)

export default router