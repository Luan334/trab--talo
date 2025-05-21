CREATE DATABASE testdb;

USE testdb;


CREATE TABLE teste (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  cpf VARCHAR(14),
  telefone VARCHAR(15)
);



 USE testdb;
 DESCRIBE teste;
SHOW TABLES;
SELECT * FROM teste;