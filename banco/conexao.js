const mysql = require('mysql')

let conexao;

if (process.env.CLEARDB_DATABASE_URL) {
    conexao = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
} else {
    conexao = mysql.createConnection({
        host: 'localhost',
        port: 3307,
        user: 'root',
        password: 'admin',
        database: 'githubclone'
    })
}

module.exports = conexao