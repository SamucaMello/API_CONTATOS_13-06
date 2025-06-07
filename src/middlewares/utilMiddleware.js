import { Types } from "mongoose";

export const validId = (req,res,next) => {
    const id = req.params.id
    if(!Types.ObjectId.isValid(id)){
        return res.status(400).send({erro: "ID inválido."})
    }
    req.contatoId = id
    next()
}