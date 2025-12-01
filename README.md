💰 API Financeira - Controle de Fluxo de Caixa

Este projeto é uma API RESTful completa para gerenciamento financeiro (entradas e saídas), desenvolvida como parte da avaliação da Pós-Graduação em Desenvolvimento Web Full Stack.

O sistema permite cadastrar transações, visualizar o histórico, editar lançamentos e excluir registros, com cálculo automático de saldo em tempo real. Além da API, o projeto conta com uma interface Front-end moderna para interação com o usuário.

🌐 Links do Projeto

- 🔗 API em Produção (Backend + Frontend): [Acesse aqui a aplicação no Render](https://api-financeira-76md.onrender.com/)

- ⚙️ API Test: https://api-financeira-76md.onrender.com/api/transacoes

- 📂 Repositório GitHub: [ttps://github.com/gabriellaradicchi/api-financeira](https://github.com/gabriellaradicchi/api-financeira/tree/main)

🚀 Tecnologias Utilizadas

O projeto foi construído utilizando a stack MERN (adaptada) e práticas modernas de desenvolvimento:

- Node.js: Ambiente de execução JavaScript no servidor.

- Express: Framework web para criação das rotas e servidor.

- MongoDB Atlas: Banco de dados NoSQL em nuvem.

- Mongoose: ODM (Object Data Modeling) para manipulação dos dados.

- Jest & Supertest: Testes automatizados de integração.

- HTML5 / CSS3 / JavaScript (Vanilla): Frontend responsivo consumindo a API via fetch.

- Chart.js: Biblioteca para geração de gráficos dinâmicos.

- Render: Plataforma de hospedagem e deploy contínuo.

⚙️ Documentação da API (Endpoints)

A API base roda no prefixo /api. Abaixo estão as rotas disponíveis:

![alt text](image.png)

🧪 Como Testar no Postman

Para testar as rotas da API manualmente utilizando o Postman, siga os passos abaixo:

1. Configurar a Requisição

URL Base: https://api-financeira-76md.onrender.com/api/transacoes

2. Exemplos de Uso

➤ Criar Transação (POST)

Método: POST

URL: https://api-financeira-76md.onrender.com/api/transacoes

Body: Selecione a opção raw e o formato JSON.

{
  "titulo": "Freelance",
  "valor": 1500.50,
  "tipo": "entrada",
  "data": "2023-12-10"
}

➤ Listar Transações (GET)

Método: GET

URL: https://api-financeira-76md.onrender.com/api/transacoes

Resposta Esperada: Uma lista JSON com todas as transações cadastradas.

➤ Editar Transação (PUT)

Método: PUT

URL: https://api-financeira-76md.onrender.com/api/transacoes/ID_DA_TRANSACAO

Nota: Substitua ID_DA_TRANSACAO pelo código _id retornado na listagem (GET).

Body:

{
  "titulo": "Freelance (Corrigido)",
  "valor": 1600.00
}

➤ Excluir Transação (DELETE)

Método: DELETE

URL: https://api-financeira-76md.onrender.com/api/transacoes/ID_DA_TRANSACAO

Nota: Substitua ID_DA_TRANSACAO pelo código _id que deseja remover.

🛠️ Como executar o projeto localmente

Siga este passo a passo para rodar a aplicação na sua máquina:

1. Pré-requisitos

- Node.js instalado (v14 ou superior).

- Git instalado.

- Uma conta no MongoDB Atlas (para obter a string de conexão).

2. Clonar o repositório

Abra o terminal e execute:

git clone https://github.com/gabriellaradicchi/api-financeira.git
cd api-financeira

3. Clonar o repositório

npm install

4. Configurar as Variáveis de Ambiente

Crie um arquivo chamado .env na raiz do projeto e adicione a string de conexão do seu banco de dados MongoDB:

DB_URL=mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster0.exemplo.mongodb.net/?retryWrites=true&w=majority
PORT=3000

5. Executar os Testes (Opcional)

Para verificar se tudo está funcionando corretamente:

npm test

6. Iniciar o Servidor

Para rodar a aplicação em modo de desenvolvimento (com hot-reload se tiver o nodemon) ou produção:

npm start

O servidor iniciará na porta 3000 (ou na porta definida no .env).
Acesse no navegador: http://localhost:3000

📂 Estrutura do Projeto

A arquitetura segue o padrão MVC (Model-View-Controller) para organização e escalabilidade:

![alt text](image-1.png) 

👩‍💻 Autora

Desenvolvido por Gabriella Radicchi.
Projeto entregue para a disciplina Node.js da pós Desenvolvimento Web Full Stack.
