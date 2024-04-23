const express = require ("express");
const app = express();
const port = 3000;
const router = require("./routers/index.js")
const conexao = require ("./infraestrutura/tabelas")

tabelas.init(conexao);

router(app);



app.listen(3000, (error) => {
    if (error){
        console.log("Erro");
        return;
    }
    console.log("Sucesso")
})