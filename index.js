const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql2');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'testdb'
});

conn.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

// Listar dados
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM teste';
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.render('home', { nomes: results });
  });
});

// Inserir novo nome
app.post('/teste/insertteste', (req, res) => {
  const nome = req.body.nome;
  const sql = `INSERT INTO teste (nome) VALUES (?)`;
  conn.query(sql, [nome], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Mostrar tela de edição
app.get('/teste/editar/:id', (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM teste WHERE id = ?`;
  conn.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.render('editar', { dado: result[0] });
  });
});

// Atualizar no banco
app.post('/teste/atualizar/:id', (req, res) => {
  const id = req.params.id;
  const nome = req.body.nome;
  const sql = `UPDATE teste SET nome = ? WHERE id = ?`;
  conn.query(sql, [nome, id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Deletar do banco
app.get('/teste/deletar/:id', (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM teste WHERE id = ?`;
  conn.query(sql, [id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

