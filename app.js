import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import  contatosRoute  from "./src/routes/contatosRoute.js";
import { connectDB } from "./src/database/database.js";
import userRoute from './src/routes/userRoutes.js'

dotenv.config()
connectDB()



const app = express()
app.use(express.json())
app.use(cors())


app.use("/user", userRouter)

app.use("/contatos", contatosRoute)

app.get("/", (req, res) => {
    const contatosUrl =  `${req.protocol}://${req.host}/contatos`
    return res.send(`<h1> Teste em <a href = '${contatosUrl}'>contatos</a> </h1>`)
})

app.listen(process.env.PORT, () => console.log(`Rodando na porta ${process.env.PORT}`))