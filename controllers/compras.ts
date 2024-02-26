import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import Compra, { ICompra } from "../models/compras";



export const getcompras = async (req: Request, res: Response) => {
    
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const consulta = { usuario: usuarioId };

    const compras = await Compra.find(consulta)
    
    res.status(200).json({
        data: [
            ...compras
        ]
    })
}

    
export const crearCompra = async (req: Request, res: Response) => {
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
    const compraData: ICompra = req.body

    const data = {
        ...compraData,
        usuario: usuarioId,
        createdAt: new Date(),
        status: "pending"
    }

    const compra = new Compra(data);

    await compra.save();

    res.status(201).json({
        compra
    })

}

