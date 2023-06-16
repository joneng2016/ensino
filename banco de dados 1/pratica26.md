# Prática 26

```
create database learn_leftjoin;
use learn_leftjoin;

create table ferramenta (
	id_ferramenta integer primary key auto_increment,
	nome varchar(255)
);

create table operario (
	id_operario integer primary key auto_increment,
	nome varchar(255),
	sobrenome varchar(255),
	id_ferramenta integer,
	foreign key (id_ferramenta) references ferramenta(id_ferramenta)
);


insert into ferramenta (nome) values 
('chave de fenda'),
('martelo'),
('chave philips'),
('furadeira'),
('paralelepipido');


insert into operario (nome, sobrenome, id_ferramenta) values
('Joao', 'Da Silva', 1),
('Odair', 'Da Silva', null),
('Silva', 'Da Silva', 3),
('Renã é meu Fã', 'Da Silva', NULL),
('CaraPerdeu24mil', 'Da Silva', 2),
('Joséw', 'Da Silva', 4);


select 
	* 
from 
	operario o
left join ferramenta f on o.id_ferramenta = f.id_ferramenta;

select 
	* 
from 
	operario o
inner join ferramenta f on o.id_ferramenta = f.id_ferramenta;
```
