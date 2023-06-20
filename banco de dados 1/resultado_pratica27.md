```
CREATE database sala_aula;
use sala_aula;

create table professores (
	id_professor INTEGER primary key auto_increment,
	nome varchar(100),
	sobrenome varchar(100)
);

create table alunos (
	id_aluno INTEGER primary key auto_increment,
	nome varchar(100),
	sobrenome varchar(100)
);


drop table classe;
create table classe (
	id_classe INTEGER primary key auto_increment,
	nome varchar(100),
	id_professor INTEGER,
	id_aluno INTEGER,
	foreign key (id_professor) references professores(id_professor),
	foreign key (id_aluno) references alunos(id_aluno)
);

insert into 
	professores
	(nome, sobrenome)
values 
	('Nome 1', 'Sobrenome 1'),
	('Nome 2', 'Sobrenome 2');


insert into 
	alunos
	(nome, sobrenome)
values 
	('Aluno 1', 'Sobrenome 1'),
	('Aluno 2', 'Sobrenome 2'),
	('Aluno 3', 'Sobrenome 3'),
	('Aluno 4', 'Sobrenome 4'),	
	('Aluno 5', 'Sobrenome 5');



insert into 
	classe (nome, id_professor, id_aluno)
values
	('Banco de Dados 1', 1, 1),
	('Banco de Dados 1', 1, 2),	
	('Banco de Dados 1', 1, 3),
	('Banco de Dados 1', 1, 4),
	('Introdução a Internet', 2, 1),
	('Introdução a Internet', 2, NULL),	
	('Introdução a Internet', 2, NULL);	


select
	*
from 
	classe c
inner join professores p on p.id_professor = c.id_professor
inner join alunos a on a.id_aluno = c.id_aluno
;

select
	*
from 
	classe c
left join professores p on p.id_professor = c.id_professor
left join alunos a on a.id_aluno = c.id_aluno
;
```
