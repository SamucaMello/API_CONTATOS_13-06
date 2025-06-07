import {connect} from "mongoose"

export function connectDB(){
    connect(process.env.MONGO_URI)
        .then(() => console.log( "Conectado com sucesso!")   )
        .catch((err) => console.log( `Erro: ${err.toString()}`) )

}