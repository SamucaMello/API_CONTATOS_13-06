import { Router } from "express";
import { Types } from "mongoose";
import { contatoModel} from "../models/contatosModel.js";

const contatosRoute = Router()

// :id -> GET
const getContatoById = async (req, res) => {
    const contato = await contatoModel.findOne({_id: req.contatoId, usuario:req.userId})

    if (!contato) {
        return res.status(400).send({ erro: "Contato não encontrado" })
    }

    return res.send({ contato })
}

// -> GET
const getAllContatos = async (req,res)=>{
    const allContatos = await contatoModel.find({usuario: req.userId})
    return res.send(allContatos)
}

// -> POST + body
const createContato = async (req, res) => {
    const { nome, telefone, email, foto } = req.body

    if (!nome || !telefone || !email) {
        return res.status(400).send({ erro: "Preencha todos os campos." })
    }

    try {
        const contato = await contatoModel.create({usuario: req.userId, nome,telefone,email,foto})
        await contato.save()
        return res.send({ sucesso: "Contato criado com sucesso!", contato })
    } catch {

        return res.status(404).send({ erro: "Tente outro número de telefone ou e-mail." })
    }
}

// -> id na query + metodo PUT
const updateContatoById = async (req, res) => {
      const { nome, email, telefone, foto } = req.body

    if (!nome && !email && !telefone && !foto) {
        return res.status(400).send({ erro: "Preencha pelo menos um campo." })
    }
    await contatoModel.findOneAndUpdate({_id:req.contatoId}, {nome,email,telefone,foto})


    return res.send({ sucesso: "contato atualizado com sucesso!" })

}


//->ID na query + metodo delete
const deleteContato = async (req,res) => {
    await contatoModel.findOneAndDelete({_id: req.contatoId, usuario: req.userId})

    return res.send({ sucesso: "Contato apagado com sucesso!" })
}


export default {createContato, getAllContatos, getContatoById, updateContatoById, deleteContato}