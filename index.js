const Autenticacao = require('./auth/autenticacao');
const AutenticacaoAvancada = require('./advanced-auth/autenticacaoAvancada');

(async () => {
  console.log("=== Implementação 1: Autenticação Básica ===");
  
  const implementa = new Autenticacao();
  sistemaAutenticacao1.registrarUsuario('lewisHamilton', 'ferrari123');
  sistemaAutenticacao1.login('lewisHamilton', 'ferrari123');
  sistemaAutenticacao1.login('lewisHamilton', 'senhaIncorreta');

  console.log("\n=== Implementação 2: Autenticação Avançada com PBKDF2 ===");
  
  const sistemaAutenticacao2 = new AutenticacaoAvancada();
  await sistemaAutenticacao2.registrarUsuario('victoriaFernandes', 'zelda456');
  await sistemaAutenticacao2.login('victoriaFernandes', 'zelda456');
  await sistemaAutenticacao2.login('victoriaFernandes', 'senhaIncorreta');
})();
