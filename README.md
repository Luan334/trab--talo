# 📘 Cadastro de Usuários

## 📌 Visão Geral
Este projeto é um sistema de **Cadastro de Usuários** que permite:
- Inserir novos usuários com nome, CPF e telefone.
- Editar dados dos usuários cadastrados.
- Deletar usuários ou limpar apenas o CPF ou o telefone.
- Exibir e ocultar a lista de usuários cadastrados.

O projeto utiliza Node.js, Express e MySQL, com o mecanismo de templates Handlebars para renderizar as páginas.

---

## 🚀 Tecnologias Utilizadas
- **Node.js**: Plataforma para desenvolvimento back-end.
- **Express**: Framework para servidor web.
- **MySQL**: Banco de dados relacional.
- **Express-Handlebars**: Motor de templates para renderizar as views.
- **Bootstrap 5**: Framework CSS para estilização.
- **MySQL2**: Biblioteca de conexão com MySQL.

---

## 📂 Estrutura de Arquivos

projeto/
│
├── index.js # Arquivo principal da aplicação Express
├── package.json # Dependências e scripts
├── package-lock.json # Gerenciamento de versões
│
├── views/ # Templates Handlebars
│ ├── home.handlebars # Página de cadastro e lista de usuários
│ ├── editar.handlebars # Página de edição de usuário
│ └── layouts/
│ └── main.handlebars# Layout base (opcional)
│
└── public/ # Arquivos estáticos (CSS, JS, imagens)

---

## 🔧 Instalação e Execução

1️⃣ **Clonar o repositório**:
```bash
git clone <https://github.com/Luan334/trab-italo.git>
cd projeto
2️⃣ Instalar dependências:

bash
npm install
3️⃣ Configurar o banco de dados:

Certifique-se de ter o MySQL instalado e rodando.

Crie o banco de dados:

sql

CREATE DATABASE testdb;
Crie a tabela:

sql

CREATE TABLE teste (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  cpf VARCHAR(14) DEFAULT NULL,
  telefone VARCHAR(15) DEFAULT NULL,
  UNIQUE KEY (cpf)
);

⚠️ Observação: Se desejar permitir CPFs vazios (NULL), mantenha o campo cpf como DEFAULT NULL e use NULL no código de limpeza de CPF.

4️⃣ Executar o servidor:
bash
node index.js

4️⃣Ou para desenvolvimento com reinicialização automática:

bash
npx nodemon index.js

5️⃣ Acessar no navegador:

http://localhost:3000

📋 Funcionalidades Implementadas
✅ Cadastro de usuários: formulário para inserir nome, CPF e telefone, com validação de formato.
✅ Listagem de usuários: exibe todos os usuários cadastrados em cards.
✅ Edição de usuários: tela para editar os dados de um usuário específico.
✅ Exclusão de usuários: botão para excluir um usuário com confirmação.
✅ Limpeza de CPF: botão para limpar apenas o CPF de um usuário.
✅ Limpeza de telefone: botão para limpar apenas o telefone de um usuário.
✅ Ocultar/exibir lista: botão para ocultar ou exibir os registros salvos.
✅ Validação de CPF duplicado: o sistema impede inserção ou atualização de um CPF já existente.

🔒 Restrições de Banco de Dados
O campo cpf tem uma restrição UNIQUE, garantindo que nenhum CPF duplicado seja cadastrado (exceto se o valor for NULL).

O campo cpf permite NULL, permitindo limpar o CPF sem causar erro.

🎨 Estilização
Utiliza Bootstrap 5 para responsividade e estilo limpo.
Inclui ícones com Bootstrap Icons.

🛠️ Melhorias Futuras

Implementar autenticação de usuários (login).
Adicionar paginação na listagem.
Adicionar máscaras de input no front-end (bibliotecas ).
Validação de CPF no back-end (ex.: dígito verificador).
Exportação de dados para CSV/PDF.
>>>>>>> e2ca104 (Projeto final)
