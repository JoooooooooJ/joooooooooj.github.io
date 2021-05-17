const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    port: 3306,
    user: 'bb7e9c26b4974f',
    password: '7cd5642f',
    database: 'heroku_08995d090e27831'
})

module.exports = conexao