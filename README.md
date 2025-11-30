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

### Abrir o Cypress Test Runner (interativo):
```bash
npx cypress open
```

### Executar todos os testes em modo headless:
```bash
npx cypress run
```

### Executar um arquivo de teste específico:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Executar testes com navegador específico:
```bash
npx cypress run --browser chrome
npx cypress run --browser firefox
```

## 📋 Testes Realizados

### 1. **Login (login.cy.js)**
Valida a funcionalidade de autenticação do usuário:
- ✅ Login com credenciais válidas
- ✅ Validação de mensagens de erro com credenciais inválidas
- ✅ Verificação de redirecionamento após login bem-sucedido
- ✅ Persistência de sessão

### 2. **Logout (logout.cy.js)**
Testa o processo de desconexão do usuário:
- ✅ Logout bem-sucedido
- ✅ Limpeza de dados de sessão
- ✅ Redirecionamento para página de login
- ✅ Invalidação de token de autenticação

### 3. **Registro de Usuário (register.cy.js)**
Valida o processo de criação de conta:
- ✅ Registro com dados válidos
- ✅ Validação de campos obrigatórios
- ✅ Verificação de senhas fraca/forte
- ✅ Validação de email duplicado
- ✅ Confirmação de email
- ✅ Mensagens de erro apropriadas

### 4. **Formulário de Contato (contactUs.cy.js)**
Testa o envio de mensagens de contato:
- ✅ Envio de mensagem com dados válidos
- ✅ Validação de campos obrigatórios
- ✅ Validação de formato de email
- ✅ Confirmação de envio
- ✅ Mensagens de sucesso e erro

### 5. **Produtos (product.cy.js)**
Valida a funcionalidade relacionada a produtos:
- ✅ Listagem de produtos
- ✅ Filtro de produtos por categoria
- ✅ Busca de produtos
- ✅ Detalhes do produto
- ✅ Ordenação de produtos (preço, nome)
- ✅ Paginação

### 6. **Pedidos de Compra (purchase_order.cy.js)**
Testa o fluxo de compra:
- ✅ Adição de produtos ao carrinho
- ✅ Remoção de produtos do carrinho
- ✅ Cálculo de totais e impostos
- ✅ Validação de endereço de entrega
- ✅ Processamento de pagamento
- ✅ Confirmação de pedido
- ✅ Geração de número de pedido

### 7. **Assinatura (subscription.cy.js)**
Valida o processo de assinatura:
- ✅ Seleção de planos de assinatura
- ✅ Validação de dados de pagamento
- ✅ Processamento de assinatura
- ✅ Confirmação de ativação
- ✅ Renovação automática
- ✅ Cancelamento de assinatura

## Relatórios

Os relatórios HTML dos testes podem ser encontrados em:
- `cypress/reports/html/`

Para visualizar o último relatório:
```bash
start cypress/reports/html/index.html
```

## Screenshots e Vídeos

As capturas de tela dos testes (em caso de falha) são salvas em:
- `cypress/screenshots/`

Os vídeos das execuções (se configurado) são salvos em:
- `cypress/videos/`

## Dependências Principais

- **Cypress** v15.5.0 - Framework de automação de testes
- **@faker-js/faker** v10.1.0 - Geração de dados de teste realistas
- **cypress-mochawesome-reporter** v4.0.2 - Geração de relatórios formatados

## Cobertura de Testes

Este projeto cobre os seguintes cenários:
- 🔐 Autenticação e Autorização
- 👤 Gerenciamento de Usuários
- 🛍️ Catálogo e Busca de Produtos
- 🛒 Fluxo de Compra Completo
- 💳 Processamento de Pagamento
- 📧 Comunicação (Contato e Notificações)
- 📜 Gerenciamento de Assinaturas
- ✅ Validação de Formulários
- ❌ Tratamento de Erros

## Autor

Michele Bastos
