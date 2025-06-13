import {Router} from "express"
import {registrar, login, isAlive} from "../controllers/userController.js"

const userRouter = Router()

userRouter.post('/registrar', registrar); // Criação de usuário

userRouter.post('/login', login); // Login do usuário

userRouter.get("/alive", isAlive)

export default userRouter