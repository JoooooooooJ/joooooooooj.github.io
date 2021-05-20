const mysql = require('mysql')
const dev_db_value = {
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'githubclone'
}

let db = {
    conexao: null,
    initPool: () => {
        if (process.env.CLEARDB_DATABASE_URL) {
            conexao = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)
            const pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL)
            pool.query('select 1 + 1', (err, rows) => { console.log("keeping the app alive") });
        } else {
            conexao = mysql.createConnection(dev_db_value)
            const pool = mysql.createPool(dev_db_value)
            pool.query('select 1 + 1', (err, rows) => { console.log("keeping the app alive") });
        }
    }
}

if (process.env.CLEARDB_DATABASE_URL) {
    db.conexao = mysql.createConnection(process.env.CLEARDB_DATABASE_URL)

} else {
    db.conexao = mysql.createConnection(dev_db_value)
}

module.exports = db