class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarRepositorios()
    }

    criarRepositorios() {
        // criar tabela de repositorios
        const sqlRepo = 'CREATE TABLE IF NOT EXISTS Repositorios (id int NOT NULL AUTO_INCREMENT, repositorios varchar(50) NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sqlRepo, erro => {
                if (erro) {
                    console.log(erro)
                } else {
                    console.log('Tabela Repositorios criada com sucesso')
                }
            })
            //cria tabela de usuários
        const sqlUser = 'CREATE TABLE IF NOT EXISTS Users (id int NOT NULL AUTO_INCREMENT, username varchar(50) NOT NULL UNIQUE, senha varchar(200) NOT NULL, PRIMARY KEY(id))'
        this.conexao.query(sqlUser, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Users criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas