const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

const hbs = exphbs.create({
  helpers: {
    json: (context) => JSON.stringify(context)
  }
});

app.engine('handlebars', hbs.engine);
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
  const { nome, cpf, telefone } = req.body;

  const checkSql = 'SELECT COUNT(*) AS count FROM teste WHERE cpf = ?';
  conn.query(checkSql, [cpf], (err, result) => {
    if (err) throw err;
    if (result[0].count > 0 && cpf !== '') {
      const sql = 'SELECT * FROM teste';
      conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('home', { 
          nomes: results, 
          error: 'Erro: Este CPF já está cadastrado.'
        });
      });
      return;
    }

    const insertSql = `INSERT INTO teste (nome, cpf, telefone) VALUES (?, ?, ?)`;
    conn.query(insertSql, [nome, cpf, telefone], err => {
      if (err) throw err;
      res.redirect('/');
    });
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
  const { nome, cpf, telefone } = req.body;

  const checkSql = 'SELECT COUNT(*) AS count FROM teste WHERE cpf = ? AND id != ?';
  conn.query(checkSql, [cpf, id], (err, result) => {
    if (err) throw err;
    if (result[0].count > 0 && cpf !== '') {
      const sql = 'SELECT * FROM teste WHERE id = ?';
      conn.query(sql, [id], (err, data) => {
        if (err) throw err;
        res.render('editar', { 
          dado: data[0], 
          error: 'Erro: Este CPF já está cadastrado.'
        });
      });
      return;
    }

    const updateSql = `UPDATE teste SET nome = ?, cpf = ?, telefone = ? WHERE id = ?`;
    conn.query(updateSql, [nome, cpf, telefone, id], err => {
      if (err) throw err;
      res.redirect('/');
    });
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

// Limpar CPF (usando NULL)
app.get('/teste/limpar-cpf/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE teste SET cpf = NULL WHERE id = ?`;
  conn.query(sql, [id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

// Limpar Telefone
app.get('/teste/limpar-telefone/:id', (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE teste SET telefone = '' WHERE id = ?`;
  conn.query(sql, [id], err => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
