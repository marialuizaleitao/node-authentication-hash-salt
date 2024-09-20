const crypto = require('crypto');

class SenhaUtil {
  // Método para gerar um salt aleatório
  static gerarSalt() {
    return crypto.randomBytes(16).toString('hex');
  }

  // Método para gerar o hash combinando a senha com o salt usando SHA-256
  static gerarHash(senha, salt) {
    return crypto.createHmac('sha256', salt).update(senha).digest('hex');
  }

  // Método para verificar se a senha fornecida corresponde ao hash armazenado
  static verificarSenha(senhaFornecida, hashArmazenado, salt) {
    const hash = this.gerarHash(senhaFornecida, salt);
    return hash === hashArmazenado;
  }
}

module.exports = SenhaUtil;
