# Projeto de Autenticação com Hashing e Salt - Atividades 1 e 2

Este projeto foi desenvolvido como parte de uma atividade de implementação de sistemas de autenticação utilizando técnicas de hashing e salt para proteger senhas de usuários. O objetivo é apresentar duas formas de autenticação: uma básica com SHA-256 e outra avançada com PBKDF2. O projeto aborda diferentes níveis de segurança no armazenamento de senhas e compara as vantagens de cada abordagem.

---

## Descrição Geral

O projeto está dividido em duas atividades principais:

1. **Atividade 1**: Implementação básica de autenticação usando hash SHA-256 e salt.
2. **Atividade 2**: Implementação avançada de autenticação com PBKDF2 (Password-Based Key Derivation Function 2).

Cada atividade segue um fluxo de registro de usuário, onde uma senha é convertida em hash com um salt, e uma lógica de login, onde a senha fornecida é validada com o hash armazenado.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```bash
.
├── README.md
├── advanced-auth
│   ├── autenticacaoAvancada.js
│   └── senhaUtilAvancada.js
├── auth
│   ├── autenticacao.js
│   └── senhaUtil.js
├── index.js
├── package-lock.json
└── package.json
```


---

## Etapas de Implementação

### Atividade 1: Autenticação Básica com Hash SHA-256 e Salt

Na **Atividade 1**, implementamos um sistema de autenticação básico que utiliza a função de hash SHA-256 combinada com um salt aleatório.

#### Classes Criadas:
- **`Autenticacao`**: Gerencia o registro e login dos usuários.
- **`SenhaUtil`**: Responsável por gerar o salt e o hash da senha utilizando SHA-256.

#### Etapas:
1. **Registro**: Ao registrar um usuário, um salt é gerado e, em seguida, a senha fornecida é convertida em hash utilizando o algoritmo SHA-256 e o salt. O hash e o salt são armazenados.
2. **Login**: No login, a senha fornecida é convertida novamente em hash utilizando o salt armazenado. Se o hash gerado corresponder ao hash armazenado, o login é bem-sucedido.

#### Vantagens:
- O uso de salt aumenta a segurança ao proteger contra ataques de Rainbow Tables.
- O algoritmo SHA-256 é rápido e eficiente para sistemas que não precisam de um nível muito alto de segurança.

---

### Atividade 2: Autenticação Avançada com PBKDF2

Na **Atividade 2**, utilizamos uma abordagem mais robusta para a segurança de senhas, aplicando o algoritmo PBKDF2, que inclui um salt e um número configurável de iterações para gerar o hash da senha.

#### Classes Criadas:
- **`AutenticacaoAvancada`**: Gerencia o registro e login dos usuários, utilizando PBKDF2.
- **`SenhaUtilAvancada`**: Realiza operações de hashing utilizando PBKDF2, salt e iterações.

#### Etapas:
1. **Registro**: No registro de um usuário, um salt é gerado, e a senha é convertida em hash utilizando o algoritmo PBKDF2, um salt e um número de iterações. O salt e o hash são armazenados.
2. **Login**: No login, a senha fornecida é convertida novamente em hash utilizando o mesmo salt e o número de iterações armazenados. Se o hash gerado corresponder ao hash armazenado, o login é bem-sucedido.

#### Vantagens:
- O uso de **PBKDF2** é considerado muito mais seguro, pois inclui várias iterações, tornando os ataques de força bruta mais difíceis.
- Protege contra ataques de **Rainbow Tables** e é adequado para cenários onde um alto nível de segurança de senhas é necessário.

---

## Como Executar o Projeto

### Instalação

1. Clone o repositório em sua máquina:

   ```bash
   git clone https://github.com/marialuizaleitao/node-authentication-hash-salt
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```

### Excecutando as Atividades

Para rodar ambas as atividades, execute o arquivo index.js:

```bash
node index.js
```

O programa executará dois fluxos de autenticação: o primeiro usando SHA-256 (Atividade 1) e o segundo usando PBKDF2 (Atividade 2). A saída no console indicará se os registros e logins foram bem-sucedidos.

## Resultados Esperados

### Atividade 1:
- O usuário será registrado com hash de senha gerado usando SHA-256 e um salt.
- O login verificará a correspondência entre a senha fornecida e o hash armazenado.

### Atividade 2:
- O usuário será registrado com hash de senha gerado usando PBKDF2 com várias iterações e um salt.
- O login verificará a correspondência entre a senha fornecida e o hash armazenado.

## Comparação entre as Implementações

| Critério               | SHA-256 com Salt (Atividade 1)  | PBKDF2 com Salt (Atividade 2) |
|------------------------|---------------------------------|-------------------------------|
| **Segurança**           | Moderada                       | Alta                          |
| **Velocidade**          | Rápida                         | Mais lenta (devido às iterações) |
| **Proteção contra ataques** | Protege contra Rainbow Tables | Protege contra Rainbow Tables e ataques de força bruta |
| **Recomendado para**    | Aplicações de baixo risco      | Aplicações que exigem alta segurança |

## Créditos
- [Maria Leitão](https://github.com/marialuizaleitao)
- [Victoria Fernandes](https://github.com/fernandesvictoria)

Este projeto foi desenvolvido para fins educacionais, com o objetivo de explorar diferentes técnicas de hashing e aprimorar a segurança no armazenamento de senhas.