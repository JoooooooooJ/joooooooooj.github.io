const customExpress = require('./config/custom-express')
const db = require('./banco/conexao')
const Tabelas = require('./banco/tabelas')
const Repositorio = require('./models/model-repositorios')
const express = require("express")
const PORT = process.env.PORT || 3000
const conexao = db.conexao

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        db.initPool()
    }
})
const app = customExpress()

app.use("/", express.static(__dirname))
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))