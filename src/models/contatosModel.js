import { Schema, model } from "mongoose";

const contatoSchema = new Schema({
    nome:     {type:String, required:true},
    telefone: {type:String, required:true},
    email:    {type:String, required:true, unique:true},
    foto:     {type:String},
})



export const contato = model("contato", contatoSchema, "contatos")