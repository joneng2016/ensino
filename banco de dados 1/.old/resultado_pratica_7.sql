create database pratica7;
use pratica7;

create table if not exists mercadoria (
	id_mercadoria INT primary key auto_increment,
	nome varchar(200),
	empresa_origem varchar(200),
	quantidade integer,
	comprador varchar(200),
	data_registro DATETIME
);

insert into mercadoria (nome, empresa_origem, quantidade, comprador, data_registro)
values
	('relógio', 'mondaine', 20, 'Roberto', '2021-02-10 12:13'),
	('relógio', 'rolex', 25, 'Ferando', '2021-02-10 12:13'),
	('corrente', 'prata eh hoje', 40, 'Fabio', '2021-02-10 12:13'),
	('mercadoria 1', 'prata eh hoje', 40, 'Fabio', '2021-02-10 12:13'),
	('mercadoria 2', 'prata eh hoje', 40, 'Fabio', '2021-02-10 12:13');
	
select * from mercadoria;

