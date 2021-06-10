const customExpress = require('./Config/customExpress');
const connection = require('./Infrastructure/connection');
const Tabelas = require('./Infrastructure/tabelas');

connection.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log("🐧 Pinguii")

        Tabelas.init(connection);

        const app = customExpress();

        app.listen(3333, ()=> {
            console.log("🐧 Ara")
        });
    }
});

