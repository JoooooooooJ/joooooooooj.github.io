const Repositorios = require('../models/model-repositorios')
const jwt = require('jsonwebtoken')


const global_key_encrypt = require('../models/secret-key')

module.exports = app => {
    app.post('/repositorios', (req, res) => {
        const token = req.header("token")
        jwt.verify(token, global_key_encrypt, (err, decoded => {
            if (err) {
                res.status(400).json({message: err})
            } else {
                if (decoded.type && decoded.type === 'ADMIN') {
                    //  todo fazer a criação do repositório aqui
                    console.log('teste')
                } else if (decoded.type) {
                    res.status(400).json({ message: 'USUÁRIO NÃO TEM PERMISSÃO PARA REALIZAR ESSA AÇÃO' })
                } else {
                    res.code(400).json({ message: 'TOKEN INVÁLIDO' })
                }
            }
        }))
    })

    app.get('/repositorios/search', (req, res) => {
        const token = req.header("token")
        jwt.verify(token, global_key_encrypt, (err, decoded => {
            if (err) {
                res.status(400).json({message: err})
            } else {
                if (decoded) {
                    //  todo fazer a criação do repositório aqui
                    console.log('teste')
                } else {
                    res.code(400).json({ message: 'TOKEN INVÁLIDO' })
                }
            }
        }))
    })
}