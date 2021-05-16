const customExpress = require('./config/custom-express')
const conexao = require('./banco/conexao')
const Tabelas = require('./banco/tabelas')
const Repositorio = require('./models/model-repositorios')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        const app = customExpress()

        app.use("/", customExpress.static(__dirname))
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})