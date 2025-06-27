import {Router} from "express"
import {registrar, login} from "../controllers/userController.js"


const userRouter = Router()

userRouter.post('/registrar', registrar); // Criação de usuário

userRouter.post('/login', login); // Login do usuário



export default userRouter