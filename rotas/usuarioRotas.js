const rotas = require('express').Router()
const Usuario = require('../modelo/Usuario')

rotas.post('/', async(req, res) => {
    const{nomeDoUsuario, email, senha} = req.body
    if(!nomeDoUsuario || !email || !senha){
        res.status(422).json({error: 'Preencha todos os campos'})
        return
    }
    const usuario = {
        nomeDoUsuario,
        email,
        senha
    }
    try {
        await Usuario.create(usuario)
        res.status(201).json({message: 'Usuario cadastrado!'})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

rotas.put('/:id', async (req, res) => {
    const id = req.params.id
    const { nomeDoUsuario, email, senha } = req.body
    const usuario = {
        nomeDoUsuario,
        email,
        senha,
    }
    try{
        const atualizarUsuario = await Usuario.updateOne({_id: id}, usuario)
        res.status(200).json(usuario)
    }catch(error){
        res.status(500).json({ error: error})
    }
})

rotas.get('/', async(req, res) => {
    try{
        const usuario = await Usuario.find()

        res.status(200).json(usuario)
    }catch(error){
        res.status(500).json({ error: error})
    }
})

rotas.get('/:id', async (req, res) =>{
    const id = req.params.id

    try {
        const usuario = await Usuario.findOne({ _id: id })
        if(!usuario){
            res.status(422).json({error: 'Usuário não encontrado'})
            return
        }
        res.status(200).json(usuario)
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

rotas.delete('/:id', async(req, res) =>{
    const id = req.params.id
    const usuario = await Usuario.findOne({ _id: id })

    if(!usuario){
        res.status(422).json({ message: 'Usuário não encontrado!'})
        return
    }

    try {
        await Usuario.deleteOne({_id: id})
        res.status(200).json({message: 'Usuário removido com sucesso '})
    } catch (error) {       
        res.status(500).json({ error: error})
    }
})

module.exports = rotas