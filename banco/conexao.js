const mysql = require('mysql')

let conexao;

if (process.env.CLEARDB_DATABASE_URL) {
    conexao = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
} else {
    conexao = mysql.createConnection("mysql://bb7e9c26b4974f:7cd5642f@us-cdbr-east-03.cleardb.com/heroku_08995d090e27831?reconnect=true")
}

module.exports = conexao