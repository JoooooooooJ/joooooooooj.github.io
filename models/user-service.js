const bcrypt = require('bcrypt');
const conexao = require('../banco/conexao');
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

const global_key_encrypt = uuid.v4()
const saltRounds = 10;

module.exports = conexao => {
    return {
        //se tudo der certo retorna o token, caso contrário uma mensagem de erro
        login: (username, password, callback) => {
            let response = {}
            conexao.query('SELECT * FROM Users WHERE username = ?', [username],
                (err, result, field) => {
                    if (err) {
                        console.log(err)
                        callback({ message: err })
                    } else if (Array.isArray(result) && result.length !== 0) {
                        bcrypt.compare(password, result[0].senha, function(err, res) {
                            if (err) {
                                console.log(err)
                                callback({ message: err })
                            }

                            if (res) {
                                const token = jwt.sign({ login: username }, global_key_encrypt)
                                console.log(token)
                                callback({ token: token })
                            }
                        });
                    } else {
                        callback({ message: "Usuário não encontrado" })
                    }
                })
            return response
        },
        saveUser: (username, password, callback) => {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                console.log(err)
                console.log(hash)
                if (err) {
                    let response = {
                        success: false,
                        message: err
                    }
                    callback(response)
                }
                conexao.query('INSERT INTO Users(username, senha) VALUES (?,?)', [username, hash],
                    (err, result, field) => {
                        if (err) {
                            let response = {
                                success: false,
                                message: err
                            }
                            callback(response)
                        } else {
                            let response = {
                                success: true,
                                message: `Usuario ${username} salvo com sucesso`
                            }
                            callback(response)
                        }
                    }
                )
            })
        }
    }
}