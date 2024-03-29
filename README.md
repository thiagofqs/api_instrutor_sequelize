# API Instrutor - Sequelize

[![Forks][forks-shield]][forks-url]
[![Stars][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

API desenvolvida, com base no meu projeto [API Instrutor](https://github.com/thiagofqs/api_instrutor), usando NodeJS e o Express, com as requisições e respostas através do Insomnia com banco de dados MySQL local.

> Uma API para cadastro de instrutores e turmas, verificação e deleção dos mesmos, ambos com verificações, atribuições e formatações.

### Requisitos

- [X] Deve ser possível cadastrar um instrutor
- [X] Deve ser possível cadastrar turmas
- [X] Deve ser possível vincular turmas ao instrutor
- [X] Deve ser possível desvincular turmas ao instrutor
- [X] Deve ser possível buscar todos os instrutores
- [X] Deve ser possível buscar um instrutor pelo registro
- [X] Deve ser possível buscar um instrutor pelo cpf
- [X] Deve ser possível buscar um/vários instrutores pelo nome
- [X] Deve ser possível buscar todas as turmas
- [X] Deve ser possível buscar todas as turmas de um instrutor
- [X] Deve ser possível buscar uma turma de uma instrutor
- [X] Deve ser possível alterar o nome, e-mail, data de nascimento e telefone de um instrutor
- [X] Deve ser possível alterar (atualizar) a senha do instrutor
- [X] Deve ser possível deletar um instrutor
- [X] Deve ser possível deletar uma turma

### Regras de Negócio

- [X] Não deve ser possível cadastrar uma instrutor com registro já existente
- [X] Não deve ser possível cadastrar uma turma com o código já existente
- [X] Não deve ser possível buscar um instrutor não existente
- [X] Não deve ser possível buscar uma turma não existente
- [X] Não deve ser possível excluir um instrutor não existente
- [X] Não deve ser possível excluir uma turma não existente
- [X] Não deve ser possível excluir uma turma se esta estiver vinculada para algum instrutor
- [X] Não deve ser possível vincular a mesma turma para o mesmo instrutor

## 🚀 Tecnologias Utilizadas

- ``NodeJS + Express``
- ``Sequelize + mysql2``
- ``Insomnia``

## 📦 Instalação

Utilize o npm do NodeJS para instalar todas as dependências:

``` sh
$ npm install express mysql2 sequelize
```

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

[⬆ Voltar ao topo](#)<br>

<!-- BADGE LINKS & IMAGES -->
[forks-shield]: https://img.shields.io/github/forks/thiagofqs/api_instrutor_sequelize.svg?style=for-the-badge
[forks-url]: https://github.com/thiagofqs/api_instrutor_sequelize/network/members
[stars-shield]: https://img.shields.io/github/stars/thiagofqs/api_instrutor_sequelize.svg?style=for-the-badge
[stars-url]: https://github.com/thiagofqs/api_instrutor_sequelize/stargazers
[issues-shield]: https://img.shields.io/github/issues/thiagofqs/api_instrutor_sequelize.svg?style=for-the-badge
[issues-url]: https://github.com/thiagofqs/api_instrutor_sequelize/issues
[license-shield]: https://img.shields.io/github/license/thiagofqs/api_instrutor_sequelize.svg?style=for-the-badge
[license-url]: https://github.com/thiagofqs/api_instrutor_sequelize/blob/main/LICENSE
