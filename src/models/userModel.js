import bcrypt from "bcryptjs"
import {Schema, model} from "mongoose"

const userSchema = new Schema({
    nome: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    senha: {type:String, required:true}
})

userSchema.pre("save", async function(next){
    if(!this.isModified("senha")) return next();
    const salt = await bcrypt.genSalt(10)
    this.senha = await bcrypt.hash(this.senha, salt)
})

userSchema.methods.compararSenha = function(senhaDigitada){
    return bcrypt.compare(senhaDigitada, this.senha)
}

export const user = model("Usuario", userSchema)