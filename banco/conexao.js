const mysql = require('mysql')

let conexao;

const dev_db_value = {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'githubclone'
}

if (process.env.CLEARDB_DATABASE_URL) {
    conexao = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)

    const pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL)
    pool.query('select 1 + 1', (err, rows) => { console.log("keeping the app alive") });
} else {
    conexao = mysql.createConnection(dev_db_value)
    const pool = mysql.createPool(dev_db_value)
    pool.query('select 1 + 1', (err, rows) => { console.log("keeping the app alive") });
}

module.exports = conexao