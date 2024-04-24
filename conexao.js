const mysql = require("mysql");
const config = require("config");

const conexao = mysql.createConnection({
  host: "banco",
  port: "127.0.0.1:3306",
  user: "root",
  password: "Jeni2210@",
  database: "mindprojeto",
});

module.exports = conexao;