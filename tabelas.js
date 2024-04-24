class Tabelas {
    init(conexao) {
      this.conexao = conexao;
      this.criarTabelaCadastro();
      this.criarTabelaLogin();
    }
  
    criarTabelaCadastro() {
      const sql = `
          CREATE TABLE IF NOT EXISTS cadastro (
          id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          nome VARCHAR (35),
          email VARCHAR (45),
          password int,
      );
        `;
      this.conexao.query(sql, (error) => {
        if (error) {
          console.log("Erro na tabela");
          console.log(error.message);
          return;
        }
        console.log("Tabela criada");
      });
    }
  }

  criarTabelaLogin() 
    const sql = `
        CREATE TABLE IF NOT EXISTS login (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR (45),
        password int,
    );
      `;

  
  module.exports = new Tabelas();