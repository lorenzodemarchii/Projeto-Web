
const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

const usuarioRotas = require('./rotas/usuarioRotas')

app.use('/usuario', usuarioRotas)

mongoose
    .connect(
        `mongodb+srv://lorenzinho:goku12@webdev.e3j2fjp.mongodb.net/test`
        )
    .then(() => {
        console.log('MongoDB Conectado!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))