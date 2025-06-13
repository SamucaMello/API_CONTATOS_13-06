import { contato } from "../models/contatosModel.js";


export const createContatoService     = (nome, telefone, email, foto) => contato.create({nome, telefone, email, foto})

export const updateContatoByIdService = (_id, body) => contato.findByIdAndUpdate(_id, body)

export const deleteContatoByIdService = (_id) => contato.findByIdAndDelete(_id) 

export const getContatoByIdService    = (_id) => contato.findById(_id)

export const getAllContatosService    = () => contato.find()