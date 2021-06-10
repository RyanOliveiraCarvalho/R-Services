const connection = require('../Infrastructure/connection');

class Produtos {
    adicionar(produto) {
        const sql = 'INSERT INTO Produtos SET ?';

        connection.query(sql, produto, (erro, resultados) => {
            if(erro){
                console.log(erro);
            } else {
                console.log(resultados)
            }

        });
    }
}

module.exports = new Produtos;