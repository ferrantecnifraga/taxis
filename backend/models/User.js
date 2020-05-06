//Dependencias
const mongoose = require('mongoose')
//Creamos una instancia de Schema para modelar un documento
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

//Exportamos el modelo
module.exports = mongoose.model('User', userSchema)