drop database if exists funcionario;
create database funcionario;

use funcionario;

create table funcionarios (
	id_funcionario INTEGER not null primary key auto_increment,
	nome varchar(100) unique not null,
	documento varchar(11) unique not null,
	funcao enum('desenvolvedor','analista','gerente de projeto','analista de negocio','coordenador','gerente') not null,
	nivel enum('júnior','pleno','sênior','não se aplica') not null,
	salario float not null
);

insert into funcionarios
	(nome, documento, funcao, nivel, salario)
values
	('João', '000000000000', 'desenvolvedor', 'pleno', 5000.00);


select * from funcionarios;


insert into funcionarios
	(nome, documento, funcao, salario)
values
	('Jorges', '1000000001', 'desenvolvedor', 5000.00);

select * from funcionarios;

insert into funcionarios
	(documento, funcao, salario)
values
	('1000000005', 'desenvolvedor', 5000.00);
