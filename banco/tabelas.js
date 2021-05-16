class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarRepositorios()
    }

    criarRepositorios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Repositorios (id int NOT NULL AUTO_INCREMENT, repositorios varchar(50) NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas