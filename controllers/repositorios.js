const Repositorios = require('../models/model-repositorios')

module.exports = app => {
    app.get('/repositorios', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/repositorios/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Repositorios.buscaPorId(id, res)
    })
    
     app.get('/repositorios/:search', (req, res) => {
    	const search = parseString(req.params.search)

        Repositorios.searchString(search, res)
    })

    app.post('/repositorios', (req, res) => {
        const atendimento = req.body

        Repositorios.add(atendimento, res)
    })
}