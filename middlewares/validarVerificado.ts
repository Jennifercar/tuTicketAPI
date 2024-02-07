import { NextFunction, Request, Response } from "express";

export const isverificado = (req: Request, res: Response, next: NextFunction) => {
    const {verificado} = req.body.usuarioConfirmado;
    if (!verificado) {
        res.status(401).json({
            msg: "El usuario no está correctamente verificado"
        })
        return
    }
    next();
}