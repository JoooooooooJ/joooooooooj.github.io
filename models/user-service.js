const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const uuid = require('uuid')

const global_key_encrypt = process.env.GLOBAL_JWT_ENCRYPT || uuid.v4()
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
                        console.log(result[0])
                        bcrypt.compare(password, result[0].senha, function(err, res) {
                            if (err) {
                                console.log(err)
                                callback({ message: err })
                            }

                            if (res) {
                                const token = jwt.sign({ login: username, type: result[0].type }, global_key_encrypt)
                                callback({ token: token })
                            }
                        });
                    } else {
                        callback({ message: "Usuário não encontrado" })
                    }
                })
            return response
        },
        saveUser: (username, password, type, callback) => {
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
                conexao.query('INSERT INTO Users(username, password, type) VALUES (?,?,?)', [username, hash, type],
                    (err, result, field) => {
                        if (err) {
                            let response = {
                                success: false,
                                message: err
                            }
                            callback(response)
                        } else {
                            const token = jwt.sign({ login: username, type: type }, global_key_encrypt)
                            callback({
                                success: true,
                                token: token
                            })
                        }
                    }
                )
            })
        }
    }
}