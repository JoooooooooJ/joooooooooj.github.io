const conexao = require('../banco/conexao')
const userService = require('../models/user-service')

const service = userService(conexao)


module.exports = app => {
    app.post("/api/user/login", (req, res) => {
        console.log(req.body)
        const userBody = req.body
        service.login(userBody.username, userBody.password, response => {
            if (response.token) {
                res.status(200).json({
                    body: { token: response.token }
                })
            } else if (response.message) {
                res.status(400).json({ message: response.message })
            } else {
                res.status(500).json({ message: "Ocorreu um erro inesperado" })
            }
        })
    })

    app.post("/api/user", (req, res) => {
        console.log(req.body)
        const userBody = req.body
        service.saveUser(userBody.username, userBody.password, userBody.type, (response) => {
            console.log(response)
            if (response.success) {
                res.status(201).json(response)
            } else res.status(500).json(response)
        })
    })
}