create database to_learn_foreing_key;

use to_learn_foreing_key;

create table modelo_carro (
	id_modelo_carro int not null primary key auto_increment,
	modelo varchar(100),
	motorizacao decimal(3,2),
	created_at DateTime default now()
);


insert into modelo_carro (modelo, motorizacao) values
('gol', 1.0),
('gol', 1.6),
('jetta', 1.8),
('jetta', 2.0),
('golf',  1.8);



drop table carros_produzidos; 
create table carros_produzidos (
	id_carros_produzidos INT not null primary key auto_increment,
	dia Date not null,
	quantidade int,
	id_modelo_carro int,
	foreign key (id_modelo_carro) references modelo_carro(id_modelo_carro)
);



insert into carros_produzidos (dia, quantidade, id_modelo_carro) 
values 
("2023-03-28", 40,1),
("2023-03-28", 40,2),
("2023-03-28", 20,3),
("2023-03-28", 10,4);



select * from modelo_carro;


select * from carros_produzidos where id_carros_produzidos = 1; 
select * from modelo_carro where id_modelo_carro = 1;


select * from modelo_carro mc where id_modelo_carro = (
	select id_modelo_carro  from carros_produzidos where id_carros_produzidos = 1
); 


set @idmodelocarro:= (select 
	id_modelo_carro  
from carros_produzidos where id_carros_produzidos = 4);

select * from modelo_carro mc where id_modelo_carro = @idmodelocarro; 

	

