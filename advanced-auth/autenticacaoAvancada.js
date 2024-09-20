const SenhaUtilAvancada = require('./senhaUtilAvancada');

class AutenticacaoAvancada {
  constructor() {
    // Mapeia usuários com suas senhas e salts
    this.usuarios = new Map();
  }

  // Método para registrar um novo usuário
  async registrarUsuario(username, senha) {
    // Gera um salt aleatório para o usuário
    const salt = SenhaUtilAvancada.gerarSalt();
    
    // Gera o hash da senha usando PBKDF2 e o salt
    const hash = await SenhaUtilAvancada.gerarHash(senha, salt);

    // Armazena o username com o hash e o salt
    this.usuarios.set(username, { hash, salt });

    console.log(`Usuário ${username} registrado com sucesso (Atividade 2)!`);
  }

  // Método para fazer login do usuário
  async login(username, senhaFornecida) {
    // Busca o usuário no banco de dados (Map)
    const usuario = this.usuarios.get(username);

    // Verifica se o usuário existe
    if (!usuario) {
      console.log('Usuário não encontrado (Atividade 2)!');
      return false;
    }

    const { hash, salt } = usuario;

    // Gera o hash da senha fornecida e compara com o hash armazenado
    const senhaValida = await SenhaUtilAvancada.verificarSenha(senhaFornecida, hash, salt);

    if (senhaValida) {
      console.log('Login bem-sucedido (Atividade 2)!');
      return true;
    } else {
      console.log('Senha incorreta (Atividade 2)!');
      return false;
    }
  }
}

module.exports = AutenticacaoAvancada;
