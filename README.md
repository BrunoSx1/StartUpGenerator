
# Gerador de Startups

## 1. Introdução

Este projeto é um **Gerador de Startups** desenvolvido com **Node.js** no backend e **React.js** no frontend, que utiliza a API da OpenAI para gerar ideias de startups com base em dados fornecidos pelo usuário. O projeto foi criado para ajudar empreendedores a gerar conceitos inovadores de startups de forma rápida e eficiente.

---

## 2. Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/startup-generator
│
├── /backend
│   ├── /models              # Modelos do banco de dados MongoDB
│   ├── /routes              # Rotas da API
│   ├── .env                 # Variáveis de ambiente (não incluídas no Git)
│   ├── .gitignore           # Arquivos e diretórios ignorados pelo Git
│   ├── package.json         # Dependências e scripts do backend
│   └── server.js            # Arquivo principal do backend
│
├── /frontend
│   ├── /node_modules        # Dependências do frontend (React)
│   ├── /public              # Arquivos públicos do React (HTML e assets)
│   ├── /src                 # Código-fonte do React (componentes, estilos)
│   ├── package.json         # Dependências do frontend
│   ├── .gitignore           # Arquivos ignorados no frontend
│   └── index.html           # Arquivo principal de HTML
│
├── README.md                # Documentação geral
├── .gitignore               # Arquivos ignorados pelo Git
└── .env.example             # Arquivo de exemplo de variáveis de ambiente
```

---

## 3. Tecnologias Utilizadas

- **Node.js**: Usado para o backend, gerenciando rotas e conexão com o banco de dados.
- **Express.js**: Framework para o servidor backend, responsável pelo roteamento e controle de requisições HTTP.
- **MongoDB com Mongoose**: Banco de dados NoSQL utilizado para armazenar informações sobre as startups geradas.
- **React.js**: Utilizado para criar a interface de usuário no frontend.
- **Axios**: Biblioteca de requisições HTTP, usada para fazer chamadas à API do backend.
- **OpenAI API**: Utilizada para gerar ideias de startups com base nos inputs fornecidos pelo usuário.
- **CSS Flexbox**: Usado para criar um layout responsivo e moderno para o frontend.

---

## 4. Funcionalidades

1. **Geração de Startups**: O usuário pode fornecer informações como setor, problema, tecnologia e mercado-alvo. A API gera uma ideia de startup com base nessas informações.
2. **Armazenamento de Dados**: As ideias de startups geradas são salvas em um banco de dados MongoDB, permitindo consultas futuras.
3. **Interface Responsiva**: A interface é estilizada para ser agradável em dispositivos móveis e desktops.
4. **Simulação de API (Dados Temporários)**: Para evitar custos altos com a API da OpenAI, dados temporários são usados durante o desenvolvimento, explicados a seguir.

---

## 5. Manual de Uso

### 5.1. Pré-requisitos

- **Node.js** e **npm** instalados.
- Uma conta no **MongoDB Atlas** (ou instalação local do MongoDB).
- (Opcional) Conta na **OpenAI** com acesso à API (pode ser necessário plano pago).

### 5.2. Configuração do Ambiente

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/seu-repositorio/startup-generator.git
   cd startup-generator
   ```

2. **Backend**:

   - Instale as dependências no diretório do backend:
     ```bash
     cd backend
     npm install
     ```

   - Crie o arquivo `.env` no diretório do backend e adicione as seguintes variáveis de ambiente:
     ```bash
     OPENAI_API_KEY=your_openai_api_key_here
     MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname
     ```

3. **Frontend**:

   - Instale as dependências do frontend:
     ```bash
     cd frontend
     npm install
     ```

4. **Inicie o Backend**:

   ```bash
   cd backend
   node server.js
   ```

5. **Inicie o Frontend**:

   Em um terminal separado, inicie o frontend:

   ```bash
   cd frontend
   npm start
   ```

6. A aplicação estará disponível em `http://localhost:3000`.

---

## 6. Uso da Aplicação

### 6.1. Geração de Startup

1. Na tela principal, insira as informações:
   - **Setor**: Indique o setor da startup (ex.: Educação, Saúde).
   - **Problema**: Descreva o problema que sua startup vai resolver.
   - **Tecnologia**: Informe a tecnologia que será usada (ex.: Aplicativos Móveis).
   - **Mercado-Alvo**: Indique o público-alvo da startup.

2. Clique no botão **Gerar Startup**.

3. O resultado será mostrado na tela e salvo no banco de dados MongoDB.

---

## 7. Uso de Dados Temporários

Durante o desenvolvimento, você pode usar **dados temporários** (mock data) para simular a resposta da API da OpenAI, já que ela possui um custo associado ao uso. Isso foi feito para permitir que a aplicação seja testada e desenvolvida sem a necessidade de gastar a cota da API.

---

## 8. Como Contribuir

1. Faça um fork do projeto.
2. Crie um branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das suas mudanças:
   ```bash
   git commit -m "Adiciona minha nova feature"
   ```
4. Envie as mudanças:
   ```bash
   git push origin minha-feature
   ```
5. Crie um Pull Request.

---

## 9. Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
