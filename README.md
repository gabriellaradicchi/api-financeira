# 💰 API Financeira

API REST completa desenvolvida em Node.js para controle de fluxo de caixa (entradas e saídas). O projeto foi desenvolvido como parte da avaliação da Pós-Graduação em Desenvolvimento Web Full Stack.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para criação da API.
- **MongoDB (Atlas)**: Banco de dados NoSQL.
- **Mongoose**: Modelagem de dados (ODM).
- **Jest & Supertest**: Testes automatizados.
- **Render**: Hospedagem da aplicação em nuvem.

## ⚙️ Funcionalidades

- **POST /api/transacoes**: Cria uma nova transação (entrada ou saída).
- **GET /api/transacoes**: Lista todas as transações cadastradas.

## 🌐 Link da API em Produção

A API está rodando online no Render. Você pode testar a listagem de dados acessando:

👉 **[https://api-financeira-76md.onrender.com/api/transacoes](https://api-financeira-76md.onrender.com/api/transacoes)**

---

## 🛠️ Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/gabriellaradicchi/api-financeira.git](https://github.com/gabriellaradicchi/api-financeira.git)

2.  Instale as dependências: (Bash)

    npm install

3.  Configure as variáveis de ambiente: Crie um arquivo .env na raiz do projeto e adicione sua string de conexão do MongoDB:

    DB_URL=mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster... 

4. Execute os testes automatizados: (Bash)

    npm test

5. Inicie o servidor: (Bash)

    pm start
