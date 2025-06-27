
import jwt from "jsonwebtoken"
import {user} from "../models/userModel.js"

 const registrar = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const usuario = await user.create({nome,email,senha})
        await usuario.save();
        res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
    } catch (err) {
        res.status(400).json({ mensagem: 'Erro ao registrar usuário', erro: err.message });
    }
};



 const login = async (req, res) => {
   
    try {
         const { email, senha } = req.body;
        const usuario = await user.findOne({email})

        if (!usuario || !(await usuario.compararSenha(senha))) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
        
        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ mensagem: 'Erro no login', erro: err.message });
    }
};


export {login, registrar}