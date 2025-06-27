import { Router } from "express";
import { Types } from "mongoose";
import { authMiddleware, validId } from "../middlewares/middlewares.js";
import contatosController from "../controllers/contatosController.js"

const contatosRoute = Router()

contatosRoute.get("/get/:id", validId, authMiddleware, contatosController.getContatoById)


contatosRoute.get("/get", authMiddleware, contatosController.getAllContatos)


contatosRoute.post("/create", authMiddleware, contatosController.createContato)

contatosRoute.put("/update/:id", validId, authMiddleware, contatosController.updateContatoById)

contatosRoute.delete("/delete/:id", validId,authMiddleware, contatosController.deleteContato)

export default  contatosRoute 