import { Model, Schema, Types, model } from "mongoose";

export interface IIssue {
    name: String;
    date: String;
    priority: Number;
    usuario: Types.ObjectId;
    createdAt: Date
};

const IssueSchema = new Schema<IIssue>({
    name: {
        type: String,
        required: [true, "El título es obligatorio"]
    },
    date: {
        type: String,
        required: [true, "La descripción es obligatoria"]
    },
    priority: {
        type: Number,
        required: [true, "La prioridad es obligatoria"]
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Issue: Model<IIssue> = model<IIssue>("Issue", IssueSchema);

export default Issue;