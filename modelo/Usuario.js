const mongoose = require('mongoose')

const Usuario = mongoose.model('Usuario', {
    nomeDoUsuario: String,
    email: String,
    senha: String,
})

module.exports = Usuario