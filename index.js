const customExpress = require('./config/custom-express')
const conexao = require('./banco/conexao')
const Tabelas = require('./banco/tabelas')
const Repositorio = require('./models/model-repositorios')
const express = require("express")
const PORT = process.env.PORT || 3000

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
    }
})

const app = customExpress()

app.use("/", express.static(__dirname))
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))