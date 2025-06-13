import { Types } from "mongoose";

export const validId = (req, res, next) => {
    const id = req.params.id
    if (!Types.ObjectId.isValid(id)) {
        return res.status(400).send({ erro: "ID inválido." })
    }
    req.contatoId = id
    next()
}




export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // Verifica se o token está presente no cabeçalho
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded; // Armazena o ID do usuário no objeto da requisição
        next();
    } catch (err) {
        res.status(401).json({ mensagem: 'Token inválido' });
    }
};