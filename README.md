# 🚀 Projeto Final - Programação para Automação de Testes em Cypress

Este repositório contém o projeto final desenvolvido para o módulo **" Automação de Testes na Camada de Interface (Web)"**, ministrado por **Samuel Lucas** , referente a **Pós-graduação em Automação de Testes de Software**.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- NPM (Node Package Manager, geralmente vem com o Node.js)

## Instalação

1. Clone este repositório:
```bash
git clone https://github.com/michelebastos/pgtas-cypress.git
cd pgtas-cypress
```

2. Instale as dependências:
```bash
npm install
```

## Estrutura do Projeto

- `cypress/e2e/` - Contém os arquivos de teste
  - `contactUs.cy.js` - Testes do formulário de contato
  - `login.cy.js` - Testes de login
  - `logout.cy.js` - Testes de logout
  - `product.cy.js` - Testes relacionados a produtos
  - `purchase_order.cy.js` - Testes de pedidos de compra
  - `register.cy.js` - Testes de registro de usuário
  - `subscription.cy.js` - Testes de assinatura

- `cypress/fixtures/` - Arquivos de dados de teste
- `cypress/modules/` - Módulos com funções reutilizáveis
- `cypress/support/` - Arquivos de suporte e comandos personalizados

## Como Executar os Testes

Para abrir o Cypress Test Runner:
```bash
npx cypress open
```

Para executar todos os testes em modo headless:
```bash
npx cypress run
```

Para executar um arquivo de teste específico:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## Relatórios

Os relatórios HTML dos testes podem ser encontrados em:
- `cypress/reports/html/`

## Screenshots

As capturas de tela dos testes (em caso de falha) são salvas em:
- `cypress/screenshots/`

## Dependências Principais

- Cypress v15.5.0
- @faker-js/faker v10.1.0 - Geração de dados de teste
- cypress-mochawesome-reporter v4.0.2 - Geração de relatórios

## Autor

Michele Bastos
