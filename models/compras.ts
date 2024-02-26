import { Model, Schema, Types, model } from "mongoose";

interface IshippingDatails{
    name: String;
    cellphone: String;
    location: String;
    address:String;

}

interface IItem {
    desc: String;
    id: Number;
    price: Number;
    quantity: Number;
    title: String;
}

export interface ICompra {
    createdAT: Date;
 usuario: Types.ObjectId;
    price: Number;
    shippingCost: Number;
    item: IItem[];
    shippingDatails: IshippingDatails;
    status: String;
    total: Number;
};

export interface ICompra {
    createdAt: Date;
    usuario: Types.ObjectId;
    price: Number;
    shippingCost: Number;
    items: IItem[];
    shippingDetails: IshippingDatails;
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
    price: {
        type: Number,
        required: true,
    },
    shippingCost: {
        type: Number,
        required: true,
    },
    items: {
        type: [{
            desc: {
                type: String,
                required: true,
            },
            id: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
        }],
        required: true,
    },
    shippingDetails: {
        name: {
			type: String,
			required: true,
		},
		cellphone: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		address: {
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