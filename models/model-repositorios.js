const moment = require('moment')
const conexao = require('../banco/conexao')

class Repositorio {
    add(repositorio, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(repositorio.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const repositorioValido = repositorio.repositorio.length >= 10

        const validacoes = [{
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'repositorio',
                valido: repositorioValido,
                mensagem: 'Repositorio deve ter pelo menos 10 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const repositorioDatado = { repositorio, dataCriacao }
        }


        const sql = 'INSERT INTO Repositorios SET ?'

        conexao.query(sql, repositorioDatado, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(repositorio)
            }
        })


        function lista(res) {
            const sql = 'SELECT * FROM Repositorios'

            conexao.query(sql, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(resultados)
                }
            })
        }

        function buscaPorId(id, res) {
            const sql = `SELECT * FROM Repositorios WHERE id=${id}`

            conexao.query(sql, (erro, resultados) => {
                const repositoriosId = resultados[0]
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json(repositoriosId)
                }
            })
        }
    }
}
module.exports = new Repositorio