/*
* Entrar no google e digitar xamp 
* Clicar no link XAMPP para Windows
* O navegador fara o download Xamp em seu computador
* Acesse a pasta download e clique no instalador do
XAMPP
* Siga os passos de instalação tradicionais
* No botão iniciar do Windows (você pode clicar como 
também pode acessar pelo teclado) digite XAMPP
* Abra a aplicação e inicie o banco de de dados

Abra o meu comptutador
Acesse o disco C:\
Abra a pasta xamp
Clique no ícone xampp-controll
Verfiqiue se o banco de dados está up
Pressione Iniciar
Digite Powershell
Abra a linha de comando
Acesse o diretório do xampp, você pode fazer isso da seguinte forma
cd C:\xampp\

Depois disso acesse o bin do mysql, você pode fazer da seguinte forma: 
cd C:\xampp\mysql\bin

Execute o banco de dados, você pode fazer isso da seguinte forma
.\mysql.exe -u root
*/


show databases;
create database my_first_db;
use my_first_db;
create table first_table( name varchar(55));
create table second_table( name integer);
show tables;
create database my_second_db;
use my_second_db;
show tables;
