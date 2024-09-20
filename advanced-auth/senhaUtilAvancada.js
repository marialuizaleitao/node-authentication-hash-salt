const crypto = require('crypto');

class SenhaUtilAvancada {
  // Método para gerar um salt aleatório
  static gerarSalt() {
    return crypto.randomBytes(16).toString('hex');
  }

  // Método para gerar o hash da senha com PBKDF2
  static gerarHash(senha, salt) {
    const iteracoes = 10000;  // Número de iterações
    const keyLength = 64;     // Tamanho da chave em bytes
    const digest = 'sha512';  // Algoritmo de hash

    return new Promise((resolve, reject) => {
      crypto.pbkdf2(senha, salt, iteracoes, keyLength, digest, (err, derivedKey) => {
        if (err) reject(err);
        resolve(derivedKey.toString('hex'));  // Retorna o hash da senha
      });
    });
  }

  // Método para verificar se a senha fornecida corresponde ao hash armazenado
  static async verificarSenha(senhaFornecida, hashArmazenado, salt) {
    const hash = await this.gerarHash(senhaFornecida, salt);  // Gera o hash com a senha fornecida e o salt
    return hash === hashArmazenado;  // Compara o hash gerado com o hash armazenado
  }
}

module.exports = SenhaUtilAvancada;
