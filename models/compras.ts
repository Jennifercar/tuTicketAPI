import { Model, Schema, Types, model } from "mongoose";

interface IinformacionEnvio{
    nombre: String;
    celular: String;
    localidad: String;
    domicilio:String;

}

interface IItem {
    date: String;
    id: Number;
    precio: Number;
    quantity: Number;
    name: String;
}

export interface ICompra {
    createdAT: Date;
    usuario: Types.ObjectId;
    precio: Number;
    item: IItem[];
    informacionEnvio: IinformacionEnvio;
    status: String;
    total: Number;
};

export interface ICompra {
    createdAt: Date;
    usuario: Types.ObjectId;
    precio: Number;
    item: IItem[];
    informacionEnvio: IinformacionEnvio;
    status: String;
    total: Number
};

const CompraSchema = new Schema<ICompra>({
    createdAt: {
        type: Date,
        default: Date.now,  
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    
    item: {
        type: [{
            date: {
                type: String,
                required: true,
            },
            id: {
                type: Number,
                required: true,
            },
            precio: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
        }],
        required: true,
    },
    informacionEnvio: {
        nombre: {
			type: String,
			required: true,
		},
		celular: {
			type: String,
			required: true,
		},
		localidad: {
			type: String,
			required: true,
		},
		domicilio: {
			type: String,
			required: true,
		},
    },
    status: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

const Compra: Model<ICompra> = model<ICompra>("Compra", CompraSchema);

export default Compra;