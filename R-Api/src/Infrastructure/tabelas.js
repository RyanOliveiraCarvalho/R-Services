class Tabelas {
    init(connection) {
        this.connection = connection;
        this.criarProdutos();
    }

    criarProdutos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(100) NOT NULL, marca varchar(50) NOT NULL, preco int NOT NULL, descricao text, PRIMARY KEY(id))';

        this.connection.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log("Tabela Criada Com Sucesso!")
            }
        });
    }
}

module.exports = new Tabelas;