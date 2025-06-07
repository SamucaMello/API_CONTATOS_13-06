import { Router } from "express";
import { Types } from "mongoose";
import { createContato, deleteContatoById, getAllContatos, getContatoById, updateContatoById } from "../controllers/contatosController.js";
import { validId } from "../middlewares/utilMiddleware.js";

const contatosRoute = Router()

contatosRoute.get("/:id", validId, async (req, res) => {
    const contato = await getContatoById(req.contatoId)

    if (!contato) {
        return res.status(400).send({ erro: "Contato não encontrado" })
    }

    return res.send({ contato })
})

contatosRoute.get("/", async (req, res) => {
    const allContatos = await getAllContatos()
    return res.send(allContatos)
})

contatosRoute.post("/", async (req, res) => {
    const { nome, telefone, email, foto } = req.body

    if (!nome || !telefone || email) {
        return res.status(400).send({ erro: "Preencha todos os campos." })
    }

    try {
        await createContato(nome, telefone, email, foto)
        return res.send({ sucesso: "Contato criado com sucesso!" })
    } catch {
        return res.status(404).send({ erro: "Tente outro número de telefone ou e-mail." })
    }
})

contatosRoute.put("/:id", validId, async (req, res) => {
    const { nome, email, telefone, foto } = req.body

    if (!nome && !email && !telefone && !foto) {
        return res.status(400).send({ erro: "Preencha pelo menos um campo." })
    }

    await updateContatoById(req.contatoId, req.body)

    return res.send({ sucesso: "contato atualizado com sucesso!" })

})

contatosRoute.delete("/:id", validId, async (req, res) => {

    await deleteContatoById(req.contatoId)

    return res.send({ sucesso: "Contato apagado com sucesso!" })
})

export { contatosRoute }