import { Types } from "mongoose";

import jwt from "jsonwebtoken";

import { contatoModel } from "../models/contatosModel.js";
import { user } from "../models/userModel.js";

export const validId = (req, res, next) => {
    const id = req.params.id
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ erro: "ID inválido." })
    }
    req.contatoId = id
    next()
}




export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id 

        

        if(!await user.findOne({_id: userId})){
            console.log("caiu aqui")
              return res.status(401).json({ mensagem: 'Token inválido' });
        }
        
        req.userId = userId
        next()
        
       
    } catch (err) {
        return res.status(401).json({ mensagem: 'Token inválido' });
    }
};