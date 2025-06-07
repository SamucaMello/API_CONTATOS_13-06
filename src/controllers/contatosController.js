import { contato } from "../models/contatosModel.js";


export const createContato     = (nome, telefone, email, foto) => contato.create({nome, telefone, email, foto})

export const updateContatoById = (_id, body) => contato.findByIdAndUpdate(_id, body)

export const deleteContatoById = (_id) => contato.findByIdAndDelete(_id) 

export const getContatoById    = (_id) => contato.findById(_id)

export const getAllContatos    = () => contato.find()