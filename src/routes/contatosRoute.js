import { Router } from "express";
import { Types } from "mongoose";
import { validId } from "../middlewares/utilMiddleware.js";
import contatosController from "../controllers/contatosController.js"

const contatosRoute = Router()

contatosRoute.get("/:id", validId, contatosController.getContatoById)


contatosRoute.get("/",contatosController.getAllContatos)


contatosRoute.post("/",contatosController.createContato)

contatosRoute.put("/:id", validId, contatosController.updateContatoById)

contatosRoute.delete("/:id", validId, contatosController.deleteContatoById)

export default  contatosRoute 