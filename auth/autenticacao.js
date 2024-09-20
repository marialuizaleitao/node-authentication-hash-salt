const SenhaUtil = require('./senhaUtil');

class Autenticacao {
  constructor() {
    this.usuarios = new Map(); // Simulação de banco de dados em memória
  }

  // Método para registrar um novo usuário
  registrarUsuario(username, senha) {
    const salt = SenhaUtil.gerarSalt();
    const hash = SenhaUtil.gerarHash(senha, salt);

    // Armazena o hash e o salt para o usuário
    this.usuarios.set(username, { hash, salt });
    console.log(`Usuário ${username} registrado com sucesso!`);
  }

  // Método para realizar login
  login(username, senhaFornecida) {
    const usuario = this.usuarios.get(username);

    if (!usuario) {
      console.log('Usuário não encontrado!');
      return false;
    }

    const { hash, salt } = usuario;
    const senhaValida = SenhaUtil.verificarSenha(senhaFornecida, hash, salt);

    if (senhaValida) {
      console.log('Login bem-sucedido!');
      return true;
    } else {
      console.log('Senha incorreta!');
      return false;
    }
  }
}

module.exports = Autenticacao;
