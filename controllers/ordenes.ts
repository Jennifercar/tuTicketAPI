import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import Orden, { IOrden } from "../models/ordenes";


export const getOrdenes = async (req: Request, res: Response) => {
    
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;

    const consulta = { user: usuarioId };

    const ordenes = await Orden.find(consulta)
    
    res.status(200).json({
        data: [
            ...ordenes
        ]
    })
}

    
export const crearOrden = async (req: Request, res: Response) => {
    const usuarioId: ObjectId = req.body.usuarioConfirmado._id;
    const ordenData: IOrden = req.body

    const data = {
        ...ordenData,
        user: usuarioId,
        createdAt: new Date(),
        status: "pending"
    }

    const orden = new Orden(data);

    await orden.save();

    res.status(201).json({
        orden
    })

}

