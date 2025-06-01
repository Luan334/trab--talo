CRUD de Cadastro de Usuários

Este projeto é uma aplicação web simples de cadastro de usuários (CRUD) utilizando as tecnologias Node.js, Express , MySQL e Handlebars. A aplicação permite cadastrar, listar, editar, excluir e limpar campos de usuários (nome, CPF e telefone).

Estrutura do Projeto


├── index.js               # Servidor Node.js
├── package.json           # Dependências e scripts
├── package-lock.json      # Detalhes das versões das dependências
├── bd_sql.sql             # Script de criação do banco de dados
├── public/
│   └── style.css          # Estilos personalizados
├── views/
│   ├── main.handlebars    # Template base
│   ├── home.handlebars    # Tela principal (cadastro e listagem)
│   └── editar.handlebars  # Tela de edição


Tecnologias Utilizadas

Node.js
Express
MySQL2
Express-Handlebars
Bootstrap 5
JavaScript (vanilla)

Instalação

Clone o repositório:
bash
 	  	git clone <repo-url>
   		cd aula-c-do-crud
   

3.2  Instale as dependências:
bash
  		 npm install
  
3.3 Configure o banco de dados:
Execute o arquivo `bd_sql.sql` no seu servidor MySQL para criar a base de dados `testdb` e a tabela `teste`.

3.4 Inicie o servidor:
bash
  	   npm start
 
3.5  Acesse no navegador:
http://localhost:3000
  




Banco de Dados

4.1 	 Estrutura da Tabela `teste`

```sql
CREATE TABLE teste (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  cpf VARCHAR(14),
  telefone VARCHAR(15)
);
```


4.2 Rotas da Aplicação

| Método | Rota                         | Descrição                           |
|--------|------------------------------|-------------------------------------|
| GET    | `/`                          | Lista todos os registros            |
| POST   | `/teste/insertteste`         | Insere novo registro                |
| GET    | `/teste/editar/:id`          | Abre tela de edição de registro     |
| POST   | `/teste/atualizar/:id`       | Atualiza um registro                |
| GET    | `/teste/deletar/:id`         | Exclui um registro                  |
| GET    | `/teste/limpar-cpf/:id`      | Limpa o campo CPF do registro       |
| GET    | `/teste/limpar-telefone/:id` | Limpa o campo telefone do registro  |


Telas

5.1 Página Inicial (`home.handlebars`):
Formulário para inserir novos usuários
Lista de registros já salvos
Botões para editar, excluir, limpar CPF e telefone
Layout responsivo com Bootstrap

5.2 Página de Edição (`editar.handlebars`):
Formulário pré-preenchido com os dados do usuário
Validações de formato para CPF e telefone via HTML e JavaScript

Estilização

Bootstrap é usado para o layout responsivo e estilos básicos.
Um CSS customizado adicional (`style.css`) define a tipografia e centralização dos formulários.


Scripts NPM

```json
"scripts": {
  "start": "nodemon ./index.js"
}

Utiliza **nodemon** para recarregar automaticamente o servidor durante o desenvolvimento.


Observações de Segurança

Este projeto não implementa sanitização de entrada nem proteção contra SQL Injection além do uso de parâmetros no `mysql2`.
Não há autenticação de usuários ou controle de acesso implementado.
Validações de dados são mínimas (apenas HTML pattern).
