DROP DATABASE IF EXISTS trigger_class;

CREATE DATABASE trigger_class;

USE trigger_class;

CREATE TABLE Produtos
(
	id_produto INTEGER PRIMARY KEY AUTO_INCREMENT,
	Referencia INTEGER,
    Descricao  VARCHAR(50) UNIQUE,
	Estoque	   INT NOT NULL DEFAULT 0
);

INSERT INTO Produtos (Referencia, Descricao, Estoque) VALUES (1,'Feijão', 10);
INSERT INTO Produtos (Referencia, Descricao, Estoque) VALUES (2,'Arroz', 5);
INSERT INTO Produtos (Referencia, Descricao, Estoque) VALUES (3,'Farinha', 15);

CREATE TABLE ItensVenda
(
    id_itensvenda INTEGER PRIMARY KEY AUTO_INCREMENT,
	Venda		INT,
	Produto	VARCHAR(3),
	Quantidade	INT
);

DELIMITER $

    CREATE TRIGGER Tgr_ItensVenda_Insert AFTER INSERT ON ItensVenda
        FOR EACH ROW
        BEGIN
            UPDATE Produtos SET Estoque = Estoque - NEW.Quantidade
        WHERE Referencia = NEW.Produto;
    END$

    CREATE TRIGGER Tgr_ItensVenda_Delete AFTER DELETE ON ItensVenda
        FOR EACH ROW
        BEGIN
            UPDATE Produtos SET Estoque = Estoque + OLD.Quantidade
        WHERE Referencia = OLD.Produto;
    END$

DELIMITER ;

SELECT 'Antes do Insert, log Trigger' AS 'Log';
SELECT * FROM Produtos;

SELECT 'Execucao do Insert' AS 'Log';

INSERT INTO ItensVenda (Venda, Produto, Quantidade) VALUES (1, '001',3);
INSERT INTO ItensVenda (Venda, Produto, Quantidade) VALUES (1, '002',1);
INSERT INTO ItensVenda (Venda, Produto, Quantidade) VALUES (1, '003',5);


SELECT 'Depois dos Inserts, logo Trigger' AS 'Log';
SELECT * FROM Produtos;


SELECT 'Execução do Delete' AS 'Log';

DELETE FROM ItensVenda WHERE Venda = 1 AND Produto = '001';

SELECT 'Depois do delete, logo Trigger' AS 'Log';


SELECT * FROM Produtos;