const conexao = require('../banco/conexao')
const userService = require('../models/user-service')

const service = userService(conexao)


module.exports = app => {
    app.post("/api/login", (req, res) => {
        console.log(req.body)
        const userBody = req.body
        const response = service.login(userBody.username, userBody.password)
        if (response.token) {
            res.status(200).json({
                body: { token: response.token }
            })
        }
        if (response.message) {
            res.status(500).json({ message: response.message })
        }
    })

    app.post("/api/createUser", (req, res) => {
        console.log(req.body)
        const userBody = req.body
        service.saveUser(userBody.username, userBody.password, (response) => {
            console.log(response)
            if (response.success) {
                res.status(201).json()
            } else res.status(500).json(response)
        })
    })
}