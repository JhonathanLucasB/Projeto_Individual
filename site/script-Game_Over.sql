create database Game_Over;

use Game_Over;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar (45),
email varchar(30),
cpf char(11),
senha varchar(40)
);

select * from Usuario;