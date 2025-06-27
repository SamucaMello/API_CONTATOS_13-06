import { Schema, model, Types } from "mongoose";

const contatoSchema = new Schema({
    nome:     {type:String, required:true},
    telefone: {type:String, required:true},
    email:    {type:String, required:true, unique:true},
    foto:     {type:String},
    usuario:  {type:Types.ObjectId, required:true, ref: "Usuarios"}
})


export const contatoModel = model("contato", contatoSchema, "contatos")
