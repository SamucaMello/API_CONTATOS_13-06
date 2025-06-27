import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import  contatosRouter  from "./src/routes/contatosRoute.js";
import { connectDB } from "./src/database/database.js";
import userRouter from './src/routes/userRoutes.js'


dotenv.config()
connectDB()



const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRouter)

app.use("/contatos", contatosRouter)

app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`)
    
})